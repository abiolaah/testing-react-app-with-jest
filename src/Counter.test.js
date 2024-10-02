import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe("Counter", () => {
    //display text
    test('counter component displays properly', () => {
        render(<Counter />);
        const headerElement = screen.getByText(/Count/i);
        expect(headerElement).toBeInTheDocument();
    })
    //count test
    it('counter displays correct initial count', () => {
        render(<Counter initialCount={0} />);
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    //increment button test
    it('count should increment by 1 if the increment button is clicked', () => {
        render(<Counter initialCount={0} />);
        const incrementButton = screen.getByRole('button', {name: "Increment"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(incrementButton);
        const countValueFinal = Number(screen.getByTestId("count").textContent);
        expect(countValueFinal).toEqual(1);
    });
    //decrement button test
    it('count should decrement by 1 if the decrement button is clicked', () => {
        render(<Counter initialCount={0} />);
        const decrementButton = screen.getByRole('button', {name: "Decrement"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(decrementButton);
        const countValueFinal = Number(screen.getByTestId("count").textContent);
        expect(countValueFinal).toEqual(-1);
    });
    //restart button test when case: current count = 0 then count = 0
    it('count should equal 0 if the restart button is clicked', () => {
        render(<Counter initialCount={0} />);
        const restartButton = screen.getByRole('button', {name: "Restart"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(restartButton);
        const countValueFinal = Number(screen.getByTestId("count").textContent);
        expect(countValueFinal).toEqual(0);
    });
    //restart button test when case: current count = 0 then count = 0
    it('count should equal 0 if the restart button is clicked when current count = 30', () => {
        render(<Counter initialCount={30} />);
        const restartButton = screen.getByRole('button', {name: "Restart"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(30);
        fireEvent.click(restartButton);
        const countValueFinal = Number(screen.getByTestId("count").textContent);
        expect(countValueFinal).toEqual(0);
    });
    //switchSign button test, case: when current count = 0
    it('count should not should not switch sign if previous count is 0 when switch sign button is clicked', () => {
        render(<Counter initialCount={0} />);
        const switchSignButton = screen.getByRole('button', {name: "Switch Signs"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(switchSignButton);
        const countValueFinal = Number(screen.getByTestId("count").textContent);
        expect(countValueFinal).toEqual(0);
    });
    //switchSign button test, case: when current count = 1 then count = -1
    it('count should be negative if previous count is positive when switch sign button is clicked', () => {
        render(<Counter initialCount={5} />);
        const switchSignButton = screen.getByRole('button', {name: "Switch Signs"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(5);
        fireEvent.click(switchSignButton);
        const countValueFinal = Number(screen.getByTestId("count").textContent);
        expect(countValueFinal).toEqual(-5);
    });
    //switchSign button test, case: when current count = -1 then count = 1
    it('count should be positive if previous count is negative when switch sign button is clicked', () => {
        render(<Counter initialCount={-3} />);
        const switchSignButton = screen.getByRole('button', {name: "Switch Signs"});
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(-3);
        fireEvent.click(switchSignButton);
        const countValueFinal = Number(screen.getByTestId("count").textContent);
        expect(countValueFinal).toEqual(3);
    });
})