describe("fizzbuzz", () => {

  let fizzbuzz

  beforeEach(() => {
    fizzbuzz = new fizzbuzz();
  })

  describe("multiples of three", () => {
    it("writes fizz for 3", () => {
      expect(fizzbuzz.play(3)).toEqual("fizz")
    })
    it("writes fizz for 6", () => {
      expect(fizzbuzz.play(6)).toEqual("fizz")
    })
    it("writes fizz for 3", () => {
      expect(fizzbuzz.play(9)).toEqual("fizz")
    })
  })

  describe("multiples of five", () => {
    it("writes fizz for 5", () => {
      expect(fizzbuzz.play(5)).toEqual("buzz")
    })
    it("writes fizz for 10", () => {
      expect(fizzbuzz.play(10)).toEqual("buzz")
    })
    it("writes fizz for 20", () => {
      expect(fizzbuzz.play(20)).toEqual("buzz")
    })
  })

  describe("multiples of five and three", () => {
    it("writes fizzbuzz for 15", () => {
      expect(fizzbuzz.play(15)).toEqual("fizzbuzz")
    })
    it("writes fizzbuzz for 30", () => {
      expect(fizzbuzz.play(30)).toEqual("fizzbuzz")
    })
    it("writes fizzbuzz for 45", () => {
      expect(fizzbuzz.play(45)).toEqual("fizzbuzz")
    })
  })

  describe("any other number", () => {
    it("1 for 1", () => {
      expect(fizzbuzz.play(1)).toBe(1)
    })
    it("4 for 4", () => {
      expect(fizzbuzz.play(4)).toBe(4)
    })
    it("8 for 8", () => {
      expect(fizzbuzz.play(8)).toBe(8)
    })
  })

})