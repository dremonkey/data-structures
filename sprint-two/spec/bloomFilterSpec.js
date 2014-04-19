var expect = chai.expect;

describe("bloomFilter", function() {
  var bloomFilter;
  var n1 = 'Node 1';
  var n2 = 'Node 2';

  beforeEach(function() {
    bloomFilter = new BloomFilter(1000,3);
  });

  it("should have methods named 'add', 'contains'", function () {
    expect(bloomFilter.add).to.be.a('function');
    expect(bloomFilter.contains).to.be.a('function');
  });

  it("should *probably* contain n1, and *definitely* not contain n2", function () {
    bloomFilter.add(n1);
    expect(bloomFilter.contains(n1)).to.be(true);
    expect(bloomFilter.contains(n2)).to.be(false);
  });
}