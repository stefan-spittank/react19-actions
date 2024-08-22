
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const addSubscription = async (email: string)=>{
    await sleep(1000);
    console.log("addSubscription", email);
    return null;
}