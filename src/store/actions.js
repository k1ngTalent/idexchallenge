export const handleRequest = (type,payload=null)=>({type,payload});
export const handleSuccess = (type,data=null)=>({type,data});
export const handleFailure = (type,error=null)=>({type,error})