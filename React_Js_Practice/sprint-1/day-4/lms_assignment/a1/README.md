## BATCH UPDATE
- At first when we click the button, 3 setStates will be sent to the react queue. Then each one will be processed and then checked with the initial State value with strict. If there is any change then it will be updated after each and every dispacter function is processed


## UPDATER

- At first when we click on button eventhandler with be called inturn that function will invoke setState or updater function. This will go to react queue and then each dispatcher will be processed and the previous value of the count will be taken from the react to update the UI