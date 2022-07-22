class Mkulima{
constructor(){
    this.farms=[];
    this.growceryVendors=[];
    this.products=[];
    this.addFarms=(farmId,FarmName,Farmer,Phone,Address)=>{
        this.farms.push({farmId,FarmName,Farmer,Phone,Address})
    }
    this.removeFarm=(farmId)=>{
        let relevant=this.farms.find(item=>item.farmId===farmId);
        let farmIndex=this.farms.indexOf(relevant);
        this.farms.slice(farmIndex,1);
    }

    this.updateFarm=function(){ 
        let relevantFarm=this.farms.find(item=>item.farmId===farmId)
        relevantFarm.FarmName=newFarmName;
        relevantFarm.Farmer=newFarmer;
        relevantFarm.Phone=newPhone;
        relevantFarm.Address=newAddress;
    }
    this.getFarm=(Id)=>{
        console.log(this.farms.find(Object=>Object.farmId===Id));
    }
    this.addProduct=(productId,productName,price)=>{
        this.product.push({productId,productName,price});
    }
    this.removeProduct=(productId)=>{
        let relevant=this.product.find(item=>item.productId===productId);
        let productIndex=this.product.indexOf(specific);
        this.product.slice(productIndex,1);
    }
    this.updateProduct=function(productId,newProductId,newProductName,NewPrice){
        let relevantProduct=this.product.find(item=>item.productId===productId);
        relevantProduct.productId=newProductId;
        relevantProduct.productName=newProductName;
        relevantProduct.price=NewPrice;
    }
    this.getProduct=(Id)=>{
        console.log(this.product.find(Object=>Object.productId===Id));
    }
    this.revealProducts=()=>{
        console.log(this.product);
    }
    this.CalcOrderCost=(productId,quantity)=>{
        let relevantProduct=this.product.find(Object=>Object.productId===productId);
        console.log(`${quantity} ${relevantProduct.productName} for ksh ${quantity}*${relevantProduct.price}`);
    }
    
}
}
let farm1=new Mkulima();
farm1.addFarm("rrrted","shimoni","fardosa","0725362718","616 korongo road");
farm1.addFarm("fdgsh","kisanya","fatma","0753442273","5346 gso");
farm1.addFarm("dseer","safi","saida","0735463723","6453 magoni");
console.log(farm1.farms);
farm1.removeFarm("fdgsh");
console.log(farm1);

