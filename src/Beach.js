export default class Beach {
    cp (v) {
        return JSON.parse(JSON.stringify(v));
    }
    ts (v) {
        return new Date().toISOString();
    }
    catom (atom, fn) {
        const new_atom = this.cp(atom);

        fn(new_atom);

        return new_atom;
    }
}
