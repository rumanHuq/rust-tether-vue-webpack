/**
 * vue class component does not know additional hooks, we need to add them
 */
import { Component } from "vue-class-decorator";

Component.registerHooks(["beforeRouteEnter"]);
