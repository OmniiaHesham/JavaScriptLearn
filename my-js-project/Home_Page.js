class Car{
    constructor(name){
      this.brand = name;
    }
    make(){
      return 'My card brand is ' + this.brand;
    }
  }
  
  mycar = new Car("Toyota");
  console.log(mycar.make());