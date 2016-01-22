describe("pingPong", function(number){
  it("will count to the number that it was given and return each number.", function(){
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, 5]);
  })
  it('will print out "ping" when the number is divisible by 3', function(){
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  })
})
