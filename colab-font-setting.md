# Google Colab Font Setting
**Keywords:** colab font 中文 字体
## Environment

- Windows 10 OS `locale` is `Chinese-Simplified`
- Google account language is English
- Chrome Font setting
  - Sans-serif: Microsoft YaHei UI
  - Fixed-width: Consolas

## Problem

Colab will be loaded in zh-Hans by default because of the `locale`, this is not controlled by the Google account language setting.

Thus, the code font is `NSimSun` by default, which is hard to read.

Colab in Chinese has option `查看英文版`, but this setting isn't written in cookie, instead it's in request parameter `?hl=en`, so when opening a notebook from colab homepage, the default language is still Chinese

## Debug and fix

- `Ctrl-Shift-C` select elements
- Select to the code area
- Select `Computed` tab
- Go to `font-family`
  - It shows `inherit` -> `monospace`
- Open extension `Advanced Font Setting`
- Go to script `Simplified Han`
- Change `Fixed-width Fonts` to `(Use Default)`

## Pitfalls

Chinese has 3 font families (Scripts): `Han` `Simplified Han` `Traitional Han`, only `Simplified Han` works for colab. Blind guessing is this option goes with the OS `locale`.

Changing default `Fixed-width Font` doesn't work.
