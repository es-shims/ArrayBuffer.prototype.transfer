# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.8](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.7...v1.0.8) - 2024-03-22

### Commits

- [Deps] update `call-bind`, `es-abstract`, `get-intrinsic`, `is-shared-array-buffer` [`4d3cd2d`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/4d3cd2d7dd5737f90e9881af6afb12eb22c0cb04)
- [actions] remove redundant finisher [`448d456`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/448d456c4f357936bade260289397d0bf5650eae)
- [Dev Deps] update `tape` [`09eb435`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/09eb435a960dd84b618578e65db00bd7668bb587)

## [v1.0.7](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.6...v1.0.7) - 2024-02-05

### Commits

- [Fix] `ArrayBufferCopyAndDetach`: properly handle moving to a larger buffer [`e283e98`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/e283e98ba5446541ebf2a1b133100b12be7324f6)
- [Deps] update `es-errors` [`4514b29`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/4514b299292c204585e518250b70a7e039874d23)

## [v1.0.6](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.5...v1.0.6) - 2024-02-05

### Commits

- [Fix] fix logic bug from a51e21f [`137bb93`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/137bb935331162d609ecd547035076e55e0df7f5)

## [v1.0.5](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.4...v1.0.5) - 2024-02-04

### Commits

- [Refactor] `IsResizableBuffer` -&gt; `IsFixedLengthArrayBuffer`, per spec [`a51e21f`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/a51e21ff04fa3bf53da22a16be2f7b051c3b7583)
- [Deps] update `array-buffer-byte-length`, `call-bind`, `define-properties`, `es-abstract`, `get-intrinsic`, `is-array-buffer` [`851e1e4`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/851e1e4c0d1632ea8429fd0bfcad03e4e620f894)
- [Refactor] use `es-errors` where possible, so things that only need those do not need `get-intrinsic` [`9ff7bef`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/9ff7bef18214973be33feb7a06f10d18d9fac7b3)
- [Dev Deps] update `aud`, `npmignore`, `object-inspect`, `tape` [`2750cea`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/2750ceae945d7f0b6cbcb5a3a831ce8ab7117d25)

## [v1.0.4](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.3...v1.0.4) - 2023-09-01

### Commits

- [Fix] move `es-abstract` to runtime deps [`d198f6d`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/d198f6deb9248e03dd796ef78e1186dd987dcb62)

## [v1.0.3](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.2...v1.0.3) - 2023-07-09

### Commits

- [Refactor] use `array-buffer-byte-length` [`95782b1`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/95782b1353e9ae9d0085b9a768d6826f82be6678)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `aud`, `es-abstract`, `tape` [`3f5dc88`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/3f5dc880e732199f074e677ab5d3b6a48700b644)
- [Deps] update `define-properties`, `get-intrinsic`, `is-array-buffer` [`5e63dbd`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/5e63dbd40faacfb72d65ea1375abd8e6340e00f6)
- [Fix] point to proper `implementation` entrypoint file [`9437844`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/94378441882b561c9a1427ff9218068d43bd3282)

## [v1.0.2](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.1...v1.0.2) - 2023-02-05

### Commits

- [Fix] add missing `exports['.']` [`c757d85`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/c757d85a57fb3567333659bf2f94044ff15658f0)

## [v1.0.1](https://github.com/es-shims/ArrayBuffer.prototype.transfer/compare/v1.0.0...v1.0.1) - 2023-02-05

### Commits

- [Fix] add missing `exports` field [`e80f7a1`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/e80f7a15eb7daa07272742726c8b688e79dc542a)

## v1.0.0 - 2023-02-05

### Commits

- Initial implementation, tests, readme [`823d4ec`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/823d4ecaac6c4ed8eb4d3aaa0db0b45a1e757ab0)
- Initial commit [`0c47ff8`](https://github.com/es-shims/ArrayBuffer.prototype.transfer/commit/0c47ff83f097ffc5157586b015cb3c216fd52f4e)
