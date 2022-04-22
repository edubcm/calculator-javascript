ongoing = document.querySelector('.ongoing')
number = document.querySelectorAll('.number')
result = document.querySelector('.result')
deleteAll = document.querySelector('#undoAll')
undo = document.querySelector('#undo')
divider = document.querySelector('#divide')
multiply = document.querySelector('#multiply')
sum = document.querySelector('#sum')
subtract = document.querySelector('#subtract')
get = document.querySelector('#get')
operator = document.querySelectorAll('.operator')
operationChar = result.childNodes.length
/* reset variables */
var reset = false
var blockTwiceComma = false

;(function () {
  /* clear all */
  deleteAll.addEventListener('click', function () {
    result.innerHTML = ''
    ongoing.innerHTML = ''
    reset = false
  })

  /* clear */
  undo.addEventListener('click', function () {
    result.removeChild(result.lastChild)
  })

  /* adjusting font size to result */
  function limitResult(numberToCheck) {
    if (numberToCheck.length > 7) {
      result.style.fontSize = '2rem'
      return numberToCheck
    } else if (numberToCheck.length <= 7) {
      result.style.fontSize = '3.5rem'
      return numberToCheck
    }
    return numberToCheck
  }

  /* getting result */
  function getResult() {
    var operationVerifier = ongoing.childNodes.length
    var operationResultVerifier = result.childNodes.length

    if (operationVerifier < 2) {
      var gettingElements = ongoing.innerText.replace(/,/gm, '.')
      var gettingElementFromResult = result.innerText.replace(/,/gm, '.')
      var newResultToGo = gettingElements + gettingElementFromResult
      var newResult = eval(newResultToGo)
      if (String(newResult).includes('.')) {
        newResult = newResult.toFixed(5)
      }
      limitResult(String(newResult))

      ongoing.insertAdjacentHTML('beforeend', gettingElementFromResult)
      result.innerHTML = ''
      result.insertAdjacentHTML('beforeend', newResult)
    } else if (operationVerifier >= 2 && operationResultVerifier > 0) {
      var gettingElements = ongoing.innerText.replace(/,/gm, '.')
      var gettingElementFromResult = result.innerText.replace(/,/gm, '.')
      var newResultToGo = gettingElements + gettingElementFromResult
      var newResult = eval(newResultToGo)
      if (String(newResult).includes('.')) {
        newResult = newResult.toFixed(5)
      }
      limitResult(String(newResult))

      ongoing.insertAdjacentHTML('beforeend', gettingElementFromResult)
      result.innerHTML = ''
      result.insertAdjacentHTML('beforeend', newResult)
    } else if (operationVerifier >= 2 && operationResultVerifier == 0) {
      var gettingElements = ongoing.innerText.slice(0, -1).replace(/,/gm, '.')

      var newResult = eval(gettingElements)
      if (String(newResult).includes('.')) {
        newResult = newResult.toFixed(5)
      }
      limitResult(String(newResult))

      result.insertAdjacentHTML('beforeend', newResult)
    }
  }

  /* operators */

  for (let x = 0; x < operator.length; x++) {
    operator[x].addEventListener('click', function () {
      switch (operator[x].id) {
        case 'sum':
          switch (reset) {
            case false:
              var firstNumberTreated = Number(
                result.childNodes[0].wholeText.replace(',', '.')
              )
              ongoing.insertAdjacentHTML(
                'beforeend',
                firstNumberTreated + operator[x].value
              )
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break

            case true:
              ongoing.innerHTML = result.innerHTML + operator[x].value
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break
          }

          break

        case 'subtract':
          switch (reset) {
            case false:
              var firstNumberTreated = Number(
                result.childNodes[0].wholeText.replace(',', '.')
              )
              ongoing.insertAdjacentHTML(
                'beforeend',
                firstNumberTreated + operator[x].value
              )
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break

            case true:
              ongoing.innerHTML = result.innerHTML + operator[x].value
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break
          }

          break

        case 'divide':
          switch (reset) {
            case false:
              var firstNumberTreated = Number(
                result.childNodes[0].wholeText.replace(',', '.')
              )
              ongoing.insertAdjacentHTML(
                'beforeend',
                firstNumberTreated + operator[x].value
              )
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break

            case true:
              ongoing.innerHTML = result.innerHTML + operator[x].value
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break
          }

          break

        case 'multiply':
          switch (reset) {
            case false:
              var firstNumberTreated = Number(
                result.childNodes[0].wholeText.replace(',', '.')
              )
              ongoing.insertAdjacentHTML(
                'beforeend',
                firstNumberTreated + operator[x].value
              )
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break

            case true:
              ongoing.innerHTML = result.innerHTML + operator[x].value
              result.innerHTML = ''
              reset = false
              blockTwiceComma = false
              break
          }

          break

        case 'get':
          reset = true
          blockTwiceComma = false
          getResult()

          break
      }
    })
  }

  /* collect numbers */

  for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
      operationChar = result.childNodes.length
      if (operationChar == 7) {
        alert('Maximum limit of 7 digits per operand.')
        return
      }
      switch (number[i].value) {
        case '1':
          switch (reset) {
            case true:
              ongoing.innerHTML = ''
              result.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '1')
              reset = false
              break
            case false:
              result.insertAdjacentHTML('beforeend', '1')
              reset = false
              break
          }
          break

        case '2':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '2')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '2')
              reset = false
              break
          }
          break

        case '3':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '3')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '3')
              reset = false
              break
          }
          break

        case '4':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '4')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '4')
              reset = false
              break
          }
          break

        case '5':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '5')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '5')
              reset = false
              break
          }
          break

        case '6':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '6')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '6')
              reset = false
              break
          }
          break

        case '7':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '7')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '7')
              reset = false
              break
          }
          break

        case '8':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '8')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '8')
              reset = false
              break
          }
          break

        case '9':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              result.insertAdjacentHTML('beforeend', '9')
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '9')
              reset = false
              break
          }
          break

        case '0':
          switch (reset) {
            case true:
              result.innerHTML = ''
              ongoing.innerHTML = ''
              reset = false
              break

            case false:
              result.insertAdjacentHTML('beforeend', '0')
              reset = false

              break
          }
          break

        case ',':
          if (blockTwiceComma == false) {
            switch (reset) {
              case true:
                result.innerHTML = ''
                ongoing.innerHTML = ''
                result.insertAdjacentHTML('beforeend', '0,')
                reset = false
                blockTwiceComma = true
                break

              case false:
                if (result.innerText.length == 0) {
                  result.insertAdjacentHTML('beforeend', '0,')
                  reset = false
                  blockTwiceComma = true
                } else {
                  result.insertAdjacentHTML('beforeend', ',')
                  reset = false
                  blockTwiceComma = true
                }
                break
            }
          } else if (blockTwiceComma == true) {
            return
          }

          break
      }
    })
  }
})()
