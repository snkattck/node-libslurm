class SlurmNodeResults
{
    constructor({ last_updated, nodes }) {
        this._last_updated = last_updated;
        this._nodes = nodes;
    }

    static fromStructArray() {
        
    }

    get nodes {
        return this._nodes;
    }

    get last_updated {
        return this._last_updated;
    }
}