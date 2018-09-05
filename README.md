# Conversor de algarismo romanos para arábicos (e vice-versa)

**Esta biblioteca tem como finalidade converter algarismos romanos em arábicos, fazendo também o caminho inverso, em aplicação web.** Ela possui duas funções, uma que recebe uma string de algarismos romanos e outra que faz o caminho inverso.

## Os métodos utilizados na biblioteca são:

### romanToInt(algRoman);

```
$node
> let converter = require("tc-numeral-roman")
> converter.romanToInt("XIV")
> //14
```

### intToRoman(num);

```
$node
> let converter = require("tc-numeral-roman")
> converter.intToRoman(14)
> //"XIV"
```

## Versão 1.0.0

* Funcionalidades: conversão de algarismos romanos para algarismos arábicos e também, o caminho iverso.
* Os algarismos romanos podem ser digitados com letras maiúsculas ou minúsculas.

## Instalação

* É necessário ter o node + npm já instalados em sua máquina. Para guia de instação visite o [site oficial].
* Proceda a instalação utilizando
```
$npm install tc-numeral-roman
```

## Roadmap oficial do projeto

### versão 1.0.0 (released)

* Funcionalidades: conversão de algarismos romanos para algarismos arábicos e também, o caminho iverso.
* Os algarismos romanos podem ser digitados com letras maiúsculas ou minúsculas.
