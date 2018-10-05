function Spy(target, method) {
  this.count = 0;
  this.func = () => this.count++;
  
  target[method] = this.func.bind(this);
  
  
  return this;
}

module.exports = Spy

