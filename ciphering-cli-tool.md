# Ciphering CLI Tool

## Implement CLI tool that will encode and decode a text by 3 substitution ciphers:
* [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
* [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)

CLI tool should accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

## Details:

1. The task must be solved using only **pure Node.js**. Any libraries and packages (except `nodemon`, `prettier` and its plugins, `eslint` and its plugins) **are prohibited**.
2. `Config` option is required and should be validated. In case of invalid confing **human-friendly** error should be printed in `stderr` and the process should exit with non-zero status code.
3. If any option is duplicated (i.e. `bash $ node my_ciphering_cli -c C1-C1-A-R0 -c C0`) then **human-friendly** error should be printed in `stderr` and the process should exit with non-zero status code.
4. If the input file option is missed - use `stdin` as an input source.
5. If the output file option is missed - use `stdout` as an output destination.
6. If the input and/or output file is given but doesn't exist or you can't access it (e.g. because of permissions or it's a directory) - **human-friendly** error should be printed in `stderr` and the process should exit with non-zero status code.
7. If passed params are fine the output (file or `stdout`) should contain transformed content of input (file or `stdin`).
8. For encoding/decoding **use only the English alphabet**, all other characters should be kept untouched.
9. Using `streams` for reading, writing and transformation of text **is mandatory**.
10. Each cipher is implemented in the form of a **transform stream**.
11. Streams are piped inside each other according to `config` (you can use `.pipe` streams instances method or `pipeline`)

**Usage example:**  

```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`

Инструмент CLI должен принимать 3 варианта (короткий псевдоним и полное имя):

1. ** - c, --config **: конфиг для шифров
Config - это строка с шаблоном `{XY (-)} n`, где:
  * `X` - это зашифрованный знак:
    * C - это шифр Цезаря (со сдвигом 1)
    * `A` для шифра Атбаш
    * `R` для шифра ROT-8
  * Y - флаг кодирования или декодирования (обязательно для шифра Цезаря и шифра ROT-8 и не должен передаваться шифром Atbash)
    * 1 для кодирования
    * 0 для декодирования
2. ** - i, --input **: путь к входному файлу
3. ** - o, --output **: путь к выходному файлу

Например, config «C1-C1-R0-A» означает «кодировать шифром Цезаря => кодировать шифром Цезаря => декодировать ROT-8 => использовать Atbash»

## Подробности:

1. Задачу нужно решать только на ** чистом Node.js **. Любые библиотеки и пакеты (кроме nodemon, prettier и его плагинов, eslint и его плагинов) ** запрещены **.
2. Параметр «Конфигурация» является обязательным и должен быть подтвержден. В случае недопустимого конфигурирования ** удобная для человека ** ошибка должна быть напечатана в `stderr`, и процесс должен завершиться с ненулевым кодом состояния.
3. Если какая-либо опция дублируется (например, `bash $ node my_ciphering_cli -c C1-C1-A-R0 -c C0`), тогда ** удобная для человека ** ошибка должна быть напечатана в` stderr`, и процесс должен завершиться с ненулевой код состояния.
4. Если опция входного файла отсутствует - используйте `stdin` в качестве источника ввода.
5. Если опция выходного файла отсутствует - используйте `stdout` в качестве места назначения вывода.
6. Если входной и / или выходной файл указан, но не существует или вы не можете получить к нему доступ (например, из-за разрешений или это каталог) - ** удобная для человека ** ошибка должна быть напечатана в `stderr` и процесс должен завершиться с ненулевым кодом состояния.
7. Если переданные параметры в порядке, вывод (файл или stdout) должен содержать преобразованное содержимое ввода (файл или stdin).
8. Для кодирования / декодирования ** используйте только английский алфавит **, все остальные символы следует оставить нетронутыми.
9. Использование потоков для чтения, записи и преобразования текста ** обязательно **.
10. Каждый шифр реализован в виде ** потока преобразования **.
11. Потоки передаются друг в друга в соответствии с `config` (вы можете использовать метод экземпляров потоков` .pipe` или `pipeline`).

** Пример использования: **

Баш
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"