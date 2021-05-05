/**
 * @flow
 */

// I am top level comment in this file.
import typeof { ComponentTypeOf } from "@ui/hello";
import threeLevelRelativePath from "../../../threeLevelRelativePath";
// This should be separated as type input
import type { OneLevelRelativePathType } from "../oneLevelRelativePath";
import { typeof ThirdPartyTypeOf1, typeof ThirdPartyTypeOf2 } from "third-party";
import sameLevelRelativePath from "./sameLevelRelativePath";
import type { ComponentType } from "@ui/hello";
import thirdParty from "third-party";
import typeof { ThirdPartyTypeOf } from "third-party";
import oneLevelRelativePath from "../oneLevelRelativePath";
// This should be treated same way as value input
import { type ComponentType1, type ComponentType2 } from "@ui/hello";
import abc from "@core/abc";
import twoLevelRelativePath from "../../twoLevelRelativePath";
import typeof { OneLevelRelativePathTypeOf } from "../oneLevelRelativePath";
import type { ThirdPartyType } from "third-party";
import component from "@ui/hello";

const handleChange = (value: ?string) => {}

export type AliasFoo3  = {
  givesANum(): number
};
export function givesAFoo3Obj(): AliasFoo3 {
  return {
    givesANum(): number { return 42; }
  };
};
