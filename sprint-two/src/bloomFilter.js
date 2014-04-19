
/**
 * Creates a new instance of a bloom filter
 *
 * @param slots (int)
 *  The number of buckets to create
 * @param hashes (int)
 *  The number of hash functions to use
 */
BloomFilter = function (slots, hashes) {
  this._slots = slots;
  this._hashes = hashes;
  this._buckets = [];
  
  for (var i=0; i<slots; i++) {
    this._buckets[i] = 0;
  }
}

BloomFilter.prototype.add = function (val) {
  // hash #hashes times
};

BloomFilter.prototype.contains = function (val) {
  var found = false;
  return found;
};

// Fowler/Noll/Vo Hashing
function fnv_1a(v) {
  var n = v.length;
  var a = 2166136261;
  var i = -1;
  var c, d;

  while (++i < n) {
    c = v.charCodeAt(i);
    if (d = c & 0xff000000) {
      a ^= d >> 24;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    if (d = c & 0xff0000) {
      a ^= d >> 16;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    if (d = c & 0xff00) {
      a ^= d >> 8;
      a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    }
    a ^= c & 0xff;
    a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
  }

  // From http://home.comcast.net/~bretm/hash/6.html
  a += a << 13;
  a ^= a >> 7;
  a += a << 3;
  a ^= a >> 17;
  a += a << 5;
  return a & 0xffffffff;
}

// One additional iteration of FNV, given a hash.
function fnv_1a_b(a) {
  a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
  a += a << 13;
  a ^= a >> 7;
  a += a << 3;
  a ^= a >> 17;
  a += a << 5;
  return a & 0xffffffff;
}