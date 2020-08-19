const enhancer = require("./enhancer.js");

// test away!
describe("repair", () => {
  it("returns a new item", () => {
    let item = {
      name: "Heartseeker",
      durability: 100,
      enhancement: 14,
    };

    const newItem = enhancer.repair(item);

    expect(newItem).not.toBe(item);
  });

  it("restores durability to 100", () => {
    const item = {
      name: "Heartseeker",
      durability: 63,
      enhancement: 14,
    };

    const newItem = enhancer.repair(item);

    expect(newItem.durability).toEqual(100);
  });
});

describe("success function is in proper order", () => {
  it("returns a new item", () => {
    const item = {
      name: "Heartseeker",
      durability: 50,
      enhancement: 20,
    };

    const newItem = enhancer.success(item);

    expect(newItem).not.toBe(item);
  });

  it("enhancement level increases by 1", () => {
    const item = {
      name: "Heartseeker",
      durability: 50,
      enhancement: 1,
    };

    const item2 = enhancer.success(item);
    const item3 = enhancer.success(item2);
    const item4 = enhancer.success(item3);
    const item5 = enhancer.success(item4);

    expect(item2.enhancement).toEqual(2);
    expect(item3.enhancement).toEqual(3);
    expect(item4.enhancement).toEqual(4);
    expect(item5.enhancement).toEqual(5);
  });

  it("does not change enhancement level if it is 20", () => {
    const item = {
      name: "Heartseeker",
      durability: 50,
      enhancement: 20,
    };

    const newItem = enhancer.success(item);

    expect(newItem.enhancement).toEqual(20);
  });

  it("does not change the durability of the item", () => {
    const item = {
      name: "Heartseeker",
      durability: 50,
      enhancement: 20,
    };

    const newItem = enhancer.success(item);

    expect(newItem.durability).toEqual(50);
  });
});

describe("fail function is in proper order", () => {
  it("decreases item durability by 5, if enhancement is less than 15", () => {
    const item = {
      name: "Heartseeker",
      durability: 50,
      enhancement: 14,
    };

    const newItem = enhancer.fail(item);

    expect(newItem.durability).toEqual(item.durability - 5);
  });

  it("decreases item durability by 10, if enhancement is 15 or more", () => {
    const item = {
      name: "Heartseeker",
      durability: 50,
      enhancement: 15,
    };

    const newItem = enhancer.fail(item);

    expect(newItem.durability).toEqual(item.durability - 10);
  });

  it("decreases enhancement level by 1, if it is greater than 16", () => {
    const item = {
      name: "Heartseeker",
      durability: 50,
      enhancement: 17,
    };

    const newItem = enhancer.fail(item);

    expect(newItem.enhancement).toEqual(item.enhancement - 1);
  });
});
