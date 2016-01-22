describe("pingPong", function(){
  it("will count to the number that it was given.", function(){
    expect(pingPong(5)).to.eql([1, 2, 3, 4, 5]);
  })
})
