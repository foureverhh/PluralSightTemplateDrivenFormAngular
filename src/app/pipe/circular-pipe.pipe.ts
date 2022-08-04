import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circularPipe'
})
export class CircularPipePipe implements PipeTransform {

  transform(form: any ): string {
    return this.safeStringify(form);
  }

  safeStringify = (form:any, indent = 2): string => {
    let cache:any[] = [];
    const retVal =  JSON.stringify(
    form,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
      indent
    );
    cache = [];
    return retVal;
  }
}
