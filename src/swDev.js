let swDev=()=>{
    let swUrl=`${process.env.PUBLIC_URL}/sw.js`
    console.log(swUrl)
    navigator.serviceWorker.register(swUrl).then((res)=>console.log("res",res))
}
export default swDev;