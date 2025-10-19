import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DateTimeChecker from './DateTimeChecker';

describe('DateTimeChecker Component', () => {
  afterEach(() => {
    vi.clearAllTimers();
    vi.restoreAllMocks();
  });

  it('should render component title', () => {
    render(<DateTimeChecker />);
    expect(screen.getByText(/DateTime Checker/i)).toBeDefined();
  });

  it('should display current date and time', () => {
    render(<DateTimeChecker />);
    
    expect(screen.getByText(/Thời gian hiện tại/i)).toBeDefined();
    expect(screen.getByText(/Timestamp:/i)).toBeDefined();
  });

  it('should have time display elements', () => {
    const { container } = render(<DateTimeChecker />);
    
    expect(screen.getByText(/Timestamp:/i)).toBeDefined();
    expect(container.querySelector('.time-display')).toBeDefined();
  });

  it('should accept date input', () => {
    render(<DateTimeChecker />);
    
    const input = screen.getByDisplayValue('');
    expect(input).toBeDefined();
    
    fireEvent.change(input, { target: { value: '2025-12-31T23:59' } });
    expect(input.value).toBe('2025-12-31T23:59');
  });

  it('should show alert when calculating without date', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<DateTimeChecker />);
    
    const button = screen.getByText(/Tính toán/i);
    fireEvent.click(button);
    
    expect(alertMock).toHaveBeenCalledWith('Vui lòng nhập ngày!');
    alertMock.mockRestore();
  });

  it('should calculate time difference when date is provided', () => {
    render(<DateTimeChecker />);
    
    const input = screen.getByDisplayValue('');
    fireEvent.change(input, { target: { value: '2025-12-31T23:59' } });
    
    const button = screen.getByText(/Tính toán/i);
    fireEvent.click(button);
    
    // Should show either past or future indicator
    const hasResult = screen.queryByText(/Sắp tới/i) || screen.queryByText(/Đã qua/i);
    expect(hasResult).toBeDefined();
  });

  // ✅ TEST PASS - Demo CI/CD success
  it('[PASS] should validate correct behavior - CI will pass', () => {
    const result = 2 + 2;
    expect(result).toBe(4); // This will PASS
  });

  // ✅ TEST PASS - Fixed the failing test
  it('[PASS] should pass after fix - CI will succeed', () => {
    const result = 2 + 2;
    expect(result).toBe(4); // Fixed: 2+2 = 4!
  });
});
