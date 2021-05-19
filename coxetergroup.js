class coxeterGroup {
    constructor(mst, msu, mtu) {
        this.mst = mst;
        this.msu = msu;
        this.mtu = mtu;
    }

    function m(g1,g2) {
        if (g1=="s" && g2=="t")||(g1=="t" && g2=="s") {
            return this.mst;
        }
        if (g1=="s" && g2=="u")||(g1=="u" && g2=="s") {
            return this.msu;
        }
        if (g1=="t" && g2=="u")||(g1=="u" && g2=="t") {
            return this.mtu;
        }
        throw ({"g1":g1,"g2":g2});
    }

    function reduce(word) {

    }
}
