import {
  takeScreenshot,
  press,
  toExist,
  // changeText,
  // scrollTo,
  // scrollToEnd,
  // longPress,
  // reload,
} from "react-native-owl"
import { delay } from "../../app/utils/delay"

jest.setTimeout(30000)

describe("App.tsx", () => {
  describe("Basic navigation", () => {
    it("takes a screenshot of the initial screen", async () => {
      await delay(2000)
      const screen = await takeScreenshot("initial")
      await toExist("loginbutton")

      expect(screen).toMatchBaseline()
    })

    //   it("longPress a Pressable, then takes a screenshot", async () => {
    //     await longPress("Pressable")

    //     const screen = await takeScreenshot("long-press")

    //     expect(screen).toMatchBaseline()
    //   })

    it("press Tap to sign in, then takes a screenshot", async () => {
      await press("loginbutton")

      await toExist("welcome-heading")

      const screen = await takeScreenshot("welcome-screen")

      expect(screen).toMatchBaseline()
    })

    //   it("enters some text and takes a screenshot", async () => {
    //     await changeText("TextInput", "Entered text")

    //     const screen = await takeScreenshot("entered-text")

    //     expect(screen).toMatchBaseline()
    //   })

    //   it("scrolls a bit and takes a screenshot", async () => {
    //     await scrollTo("ScrollView", { y: 50 })

    //     const screen = await takeScreenshot("scroll-to")

    //     expect(screen).toMatchBaseline()
    //   })

    //   it("scrolls to end and takes a screenshot", async () => {
    //     await scrollToEnd("ScrollView")

    //     const screen = await takeScreenshot("scroll-to-end")

    //     expect(screen).toMatchBaseline()
    //   })

    //   it("takes a screenshot with a custom threshold", async () => {
    //     const screen = await takeScreenshot("custom-threshold")

    //     expect(screen).toMatchBaseline({ threshold: 0.25 })
    //   })
    // })

    // describe("Reload example", () => {
    //   beforeAll(async () => {
    //     await reload()
    //   })

    //   it("takes a screenshot of the welcome screen", async () => {
    //     const screen = await takeScreenshot("after-reload")

    //     expect(screen).toMatchBaseline()
    //   })
  })
})
