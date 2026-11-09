//* type assertion (avoid it if possible)
//* "as" syntax

type status="success" | "error" | "loading";
const currentStatus: string="success";

const showStatus=(status: status)=>{
    console.log(`Current status is ${status}`);
}
showStatus(currentStatus as status); // Current status is success

//* non-null assertion operator
interface Config{
    port?: number;
}

const config: Config={
    port: 3000
};

const currentPort=config.port!;  
const currentPort1=config.port as number; 

//* constant assertion
const configuration={
    port: 3000,
    host: "localhost"
} as const;