# Check if AVX2 instructions is used in windows binary files

## Builtup
Clash windows binary is built with latest version of go, which could specifies 4 tiers of instruction set used in compiled binary. Need to check if any logic in the binary used AVX2 instructions in tier3.

## Tools
Linux -- `objdump`

Windows -- `dumpbin`, `dumpbin.exe` comes with visual studio

## Usage
Open Visual studio command prompt (or powershell) from visual studio tools bar - Tools - command line - developer command prompt

`dumpbin.exe /disasm clash.exe > decompiled.asm`

I used sublime text to find the instruction strings, like `vpand`. It seems like all AVX2 instructions starts with `v`

## Reference
[Go github links description of the tiers](https://github.com/golang/go/wiki/MinimumRequirements#amd64)

[AVX2 instructions](https://docs.oracle.com/cd/E36784_01/html/E36859/gntae.html)

[Use `awk` to scan the decompiled file for instructions](https://stackoverflow.com/questions/47878352/how-to-check-if-compiled-code-uses-sse-and-avx-instructions)
