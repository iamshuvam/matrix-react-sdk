/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { fuzzyMatch } from "../../src/utils/strings";

describe("strings", () => {
    describe("fuzzyMatch()", () => {
        it("should return exact matches", () => {
            expect(fuzzyMatch("alice", "alice")).toBe(true);
            expect(fuzzyMatch("", "")).toBe(true);
        });
        it("should be case sensitive", () => {
            expect(fuzzyMatch("BoB", "bOb")).toBe(false);
        });
        it("should match anywhere in the string", () => {
            expect(fuzzyMatch("Alice", "Al")).toBe(true);
            expect(fuzzyMatch("Alice", "lic")).toBe(true);
            expect(fuzzyMatch("Alice", "ce")).toBe(true);
        });
        it("should allow for gaps in search", () => {
            expect(fuzzyMatch("Alice", "Aie")).toBe(true);
            expect(fuzzyMatch("Alice", "Ale")).toBe(true);
            expect(fuzzyMatch("Alice", "lc")).toBe(true);
        })
    });
});
