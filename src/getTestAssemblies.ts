import * as core from '@actions/core';
import {findFilesToUpload} from './search';

export async function getTestAssemblies(): Promise<string[]> {
  try {
    let searchFolder = core.getInput('searchFolder')
    let testAssembly = core.getInput('testAssembly')

    core.debug(`Pattern to search test assemblies: ${searchFolder + testAssembly}`)
    const searchResult = await findFilesToUpload(searchFolder + testAssembly)
    
    return searchResult.filesToUpload
  } catch (err) {
    core.error(err instanceof Error ? err.message : "Unknown error type")
  }
  return []
}
