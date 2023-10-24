import {generateChainData} from "./utils/fetch.mjs"
import {writeFileSync} from "fs"

async function writeRpcsJson(){
    const rpcs = await generateChainData()
    writeFileSync("out/rpcs.json", JSON.stringify(rpcs))
}
writeRpcsJson();