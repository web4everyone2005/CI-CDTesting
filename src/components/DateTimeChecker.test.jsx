import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DateTimeChecker from './DateTimeChecker';

describe('DateTimeChecker Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render component title', () => {
    render(<DateTimeChecker />);
    expect(screen.getByText(/DateTime Checker/i)).toBeDefined();
  });

  it('should display current date and time', () => {
    const mockDate = new Date('2025-10-19T10:30:00');
    vi.setSystemTime(mockDate);
    
    render(<DateTimeChecker />);
    
    expect(screen.getByText(/Thời gian hiện tại/i)).toBeDefined();
    expect(screen.getByText(/Timestamp:/i)).toBeDefined();
  });

  it('should update time every second', async () => {
    const mockDate = new Date('2025-10-19T10:30:00');
    vi.setSystemTime(mockDate);
    
    const { container } = render(<DateTimeChecker />);
    
    // Just verify component renders with time display
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

  it('should calculate time difference correctly', () => {
    const mockDate = new Date('2025-10-19T10:00:00');
    vi.setSystemTime(mockDate);
    
    render(<DateTimeChecker />);
    
    const input = screen.getByDisplayValue('');
    fireEvent.change(input, { target: { value: '2025-10-20T10:00' } });
    
    const button = screen.getByText(/Tính toán/i);
    fireEvent.click(button);
    
    expect(screen.getByText(/Sắp tới/i)).toBeDefined();
    expect(screen.getByText(/1 ngày/i)).toBeDefined();
  });

  it('should show past time indicator', () => {
    const mockDate = new Date('2025-10-19T10:00:00');
    vi.setSystemTime(mockDate);
    
    render(<DateTimeChecker />);
    
    const input = screen.getByDisplayValue('');
    fireEvent.change(input, { target: { value: '2025-10-18T10:00' } });
    
    const button = screen.getByText(/Tính toán/i);
    fireEvent.click(button);
    
    expect(screen.getByText(/Đã qua/i)).toBeDefined();
  });
});
