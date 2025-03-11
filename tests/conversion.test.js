import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { converse } from '../packages/utils/conversion';

describe('converse', () => {
  beforeEach(() => {
    // 模拟 console.error
    console.error = vi.fn(); // 确保 console.error 是一个 spy
  });

  afterEach(() => {
    // 清理 DOM
    document.body.innerHTML = '';
  });
  it('should convert rem to px correctly', () => {
    document.documentElement.style.fontSize = '16px';
    const result = converse('2rem', document.body, 'width', 0);
    expect(result).toBe(32);
  });

  it('should convert em to px correctly', () => {
    const parentNode = document.createElement('div');
    parentNode.style.fontSize = '16px';
    document.body.appendChild(parentNode);
    const result = converse('2em', parentNode, 'width', 0);
    expect(result).toBe(32);
    document.body.removeChild(parentNode);
  });

  it('should convert vw to px correctly', () => {
    window.innerWidth = 1000;
    const result = converse('10vw', document.body, 'width', 0);
    expect(result).toBe(100);
  });

  it('should convert vh to px correctly', () => {
    window.innerHeight = 1000;
    const result = converse('10vh', document.body, 'height', 0);
    expect(result).toBe(100);
  });

  it('should return px value directly', () => {
    const result = converse('100px', document.body, 'width', 0);
    expect(result).toBe(100);
  });

  it('should convert % to px correctly', () => {
    const parentNode = document.createElement('div');
    parentNode.style.width = '200px';
    document.body.appendChild(parentNode);
    const result = converse('50%', parentNode, 'width', 0);
    expect(result).toBe(100);
    document.body.removeChild(parentNode);
  });

  it('should not be less than ask value', () => {
    const result = converse('10px', document.body, 'width', 20);
    expect(result).toBe(10);
    expect(console.error).toHaveBeenCalledWith("lemonui:the Width or Height can't less than 20px");
  });
});
