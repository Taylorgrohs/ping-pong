describe("pingPong", function(number){
  it("will count to the number that it was given and return each number.", function(){
    expect(pingPong(4)).to.eql([1, 2, "ping", 4,]);
  })
  it('will print out "ping" when the number is divisible by 3', function(){
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  })
  it('will print out "pong" when the number is divisible by 5', function(){
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"])
  })
  it('will print out "pingpong" when the number is divisible by 15', function(){
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"])
  })
})
