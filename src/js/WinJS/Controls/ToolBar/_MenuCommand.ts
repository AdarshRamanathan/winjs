// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import _Global = require("../../Core/_Global");
import _Constants = require("../ToolBar/_Constants");
import _MenuCommandBase = require("../Menu/_Command");

export class _MenuCommand extends _MenuCommandBase.MenuCommand {
    private _beforeInvoke: Function;
    private _isAttachedMode: boolean;

    constructor(isAttachedMode: boolean, element?: HTMLElement, options?: any) {
        if (options && options._beforeInvoke) {
            this._beforeInvoke = options._beforeInvoke;
        }
        this._isAttachedMode = isAttachedMode;
        super(element, options);
    }

    _invoke(event: any) {
        this._beforeInvoke && this._beforeInvoke(event);
        super._invoke(event);
    }
}
