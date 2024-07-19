import { describe, expect, test, vi } from "vitest";
import { search } from ".";

describe('search', () => {
    test('it should call console.log', () => {
        const spy = vi.spyOn(console, 'log')
        search();
        expect(spy).toHaveBeenCalledWith('ola')
        spy.mockRestore()
    })
})