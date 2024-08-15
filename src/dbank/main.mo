import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {
  stable var currentValue :Float = 300;
  stable var startTime = Time.now();

  Debug.print(debug_show(startTime));
  // currentValue := 0;

  public func checkBal () : async Float { 
    return currentValue;
  };

  let _id = 123123123123; // let is constant 
  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));


  public func topUp(amount: Float){
    currentValue+=amount;
    Debug.print(debug_show(currentValue));
  };

    public func withDraw(amount: Float){
    let temp: Float = currentValue - amount;
    if(temp >=0){
      currentValue-=amount;
      Debug.print(debug_show(currentValue));
    }else{
       Debug.print("Low Balance");
    }
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS/1000000000;
    currentValue := currentValue * (0.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  }
}