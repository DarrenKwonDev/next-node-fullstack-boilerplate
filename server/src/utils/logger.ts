import fs from 'fs';
import path from 'path';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

// logs 파일을 어디에 둘 것인가?
const logDir = path.resolve(__dirname, '../../logs');

// 로그 파일 없으면 새로 하나 만들자.
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// winston format
const { combine, timestamp, printf } = winston.format;

// Define log format
// https://www.npmjs.com/package/winston#formats
const logFormat = printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`);

/*
 * Log Level (https://www.npmjs.com/package/winston#logging)
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
// 로거를 생성합니다.
const logger = winston.createLogger({
  // 로거의 포맷을 세팅합니다.
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    // info log setting
    new winstonDaily({
      level: 'info', // info 레벨의 경우
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/info', // 로그 파일이 저장될 경로
      filename: `%DATE%.log`, // 생성될 파일 이름
      maxFiles: 30, // 30 Days saved
      json: false,
      zippedArchive: true,
    }),
    // error log setting
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error', // 로그 파일이 저장될 경로
      filename: `%DATE%.error.log`, // 생성될 파일 이름
      maxFiles: 30, // 30 Days saved
      handleExceptions: true,
      json: false,
      zippedArchive: true,
    }),
  ],
});

// transports 추가 작업
logger.add(
  new winston.transports.Console({
    format: winston.format.combine(winston.format.splat(), winston.format.colorize(), winston.format.simple()),
  }),
);

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { logger, stream };
