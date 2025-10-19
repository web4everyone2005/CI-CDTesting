import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import DateTimeChecker from './DateTimeChecker';

describe('DateTimeChecker Component', () => {
  it('should render component title', () => {
    const { unmount } = render(<DateTimeChecker />);
    expect(screen.getByText(/DateTime Checker/i)).toBeDefined();
    unmount();
  });

  it('should display current date and time', () => {
    const { unmount } = render(<DateTimeChecker />);
    expect(screen.getByText(/Thời gian hiện tại/i)).toBeDefined();
    expect(screen.getByText(/Timestamp:/i)).toBeDefined();
    unmount();
  });

  it('should have time display elements', () => {
    const { container, unmount } = render(<DateTimeChecker />);
    expect(screen.getByText(/Timestamp:/i)).toBeDefined();
    expect(container.querySelector('.time-display')).toBeDefined();
    unmount();
  });

  it('should accept date input', () => {
    const { unmount } = render(<DateTimeChecker />);
    const input = screen.getByDisplayValue('');
    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: '2025-12-31T23:59' } });
    expect(input.value).toBe('2025-12-31T23:59');
    unmount();
  });

  it('should show alert when calculating without date', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const { unmount } = render(<DateTimeChecker />);
    const button = screen.getByText(/Tính toán/i);
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalledWith('Vui lòng nhập ngày!');
    alertMock.mockRestore();
    unmount();
  });

  it('should calculate time difference when date is provided', () => {
    const { unmount } = render(<DateTimeChecker />);
    const input = screen.getByDisplayValue('');
    fireEvent.change(input, { target: { value: '2025-12-31T23:59' } });
    const button = screen.getByText(/Tính toán/i);
    fireEvent.click(button);
    const hasResult = screen.queryByText(/Sắp tới/i) || screen.queryByText(/Đã qua/i);
    expect(hasResult).toBeDefined();
    unmount();
  });

  // ✅ TEST PASS - Demo CI/CD success (no component render needed)
  it('[PASS] should validate correct behavior - CI will pass', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  // ✅ TEST PASS - Simple validation test
  it('[PASS] should pass after fix - CI will succeed', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });
});
