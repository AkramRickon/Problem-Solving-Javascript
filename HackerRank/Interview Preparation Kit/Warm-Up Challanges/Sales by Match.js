function sockMerchant(n, ar) {
    let f=[];
    let result=0;
    for(let i=1; i<=100 ; i++){
        f[i]=0;
    }
     for(let i=0; i<n ; i++){
        f[ar[i]]++;
    }
      for(let i=1; i<f.length ; i++){
         
              result+=Math.floor(f[i]/2);
          
    }
    return result;
}