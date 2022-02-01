# Fast Food Ordering Tool

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On typing in the name input, the order name changes with each keystroke  |        1 |
| On changing the food dropdown, the image for the food changes appropriately  |        1 |
| On changing the side dropdown, the image for the side changes appropriately  |        1 |
| On changing the drink dropdown, the image for the drink changes appropriately  |        1 |
| On submitting a new extra instruction, it is displayed with all the other extra instructions in a list |        2 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : tracks state for `foodId`, `sideId`, `drinkId`, `instructions`, and `orderName` |2|
| `App()` : passes state as props correctly to `OrderNameInput` and `OrderImages`, `InstructionsForm`, `InstructionsList` |2|
| `OrderNameInput({ setOrderName })` : on change, call `setOrderName` with the new `e.target.value` to change `App.js` state |1|
| `OrderImages({ foodId, sideId, drinkId })` : use the 3 props to render the correct images that live in the `public` directory |2|
| `InstructionsForm({ setInstructions, instructions })` : tracks state for the current instruction being typed. OnChange of the input, this state changes.  |2|
| `InstructionsForm({ setInstructions, instructions })` : On submit of the form, this slogan is injected into `App.js` state using a callback state handler passed down as a prop. |2|
| `InstructionsList({ instructions })` : maps through the `instructions` prop and renders an `Instruction` for each item in the array |2|
| `Instruction({ instruction } )` : renders the `instruction` prop however you like |1|

### Stretch goal ideas:
- Write two components: `OrderForm` (to hold all the input components) and `OrderDisplay` (to show the user what is selected). Import the appropriate components into these components so that App.js is only responsible for: 
  1) initializing state 
  2) calling `OrderForm` and `OrderDisplay` and
  3) passing the correct props to `OrderForm` and `OrderDisplay`.
- Write a component called `Dropdown`. Use this component to replace all 3 of your dropdowns. Ask yourself: what differs between these 3 dropsdowns? The answer to that question will tell you what props your abstracted `Dropdown` component will need to be passed. This is a challenge :)
- Add a `Submit Order` button. The app will clear the current order and keep track of all past orders and render them to the page (like soccer scorekeeper).
- Try moving all your App.js state and state handlers into a custom hook in another file
