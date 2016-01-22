describe("pingPong", function(){
  it("will count to the number that it was given and return each number.", function(){
    expect(pingPong(5)).to.eql([1, 2, 3, 4, 5]);
  })
  it("will print out 'ping' when the number is divisible by 3", function(){
    expect(3).to.equal("ping");
  })
})
