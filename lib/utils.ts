import randomString from 'crypto-random-string';
import _ from 'lodash';

/**
 * 返回电子邮箱的地址
 * @param email 电子邮箱
 * @returns 电子邮箱
 */
export function getEmailAddress(email: string) {
  return email.split('@')[0];
}

/**
 * 生成随机字符串
 * @param length 随机字符串长度
 */
export function generateRandomStr(length = 10): string {
  return randomString({ length });
}

export function generateRandomNumStr(length = 6) {
  return randomString({
    length,
    type: 'numeric',
  });
}

/**
 * 是否一个可用的字符串
 * 定义为有长度的字符串
 */
export function isValidStr(str: unknown): str is string {
  return typeof str == 'string' && str !== '';
}

/**
 * 检测一个地址是否是一个合法的资源地址
 */
export function isValidStaticAssetsUrl(str: unknown): str is string {
  if (typeof str !== 'string') {
    return false;
  }

  const filename = _.last(str.split('/'));
  if (filename.indexOf('.') === -1) {
    return false;
  }

  return true;
}

/**
 * 休眠一定时间
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
}

/**
 * 检查url地址是否匹配
 */
export function checkPathMatch(urlList: string[], url: string): boolean {
  return urlList.includes(url.split('?')[0]);
}
