import React from 'react';

class Feature extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tagIndex: 1,
            tagName: 'MEN',
        }
    }

    changeTab(index) {
        let tagName = 'MEN'
        if (index === 0) {
            tagName = 'WOMEN';
        } else if (index === 1) {
            tagName = 'MEN'
        } else {
            tagName = 'KIDS'
        }
        this.setState({
            tagIndex: index,
            tagName: tagName,
        })
    }

    render() {
        let tagIndex = this.state.tagIndex;
        return (
            <div>
                <div className="fr-globalHeader">
                    <div className="fr-golabHeader_inner">
                        <a href="https://www.uniqlo.com/jp/ja/">
                            <img className="fr-globalHeader_log -double" src="https://www.uniqlo.com/jp/ja/contents/feature/common/icons/header.svg" alt="ユニクロ UNIQLO"></img>
                        </a>

                    </div>
                </div>
                <div className="wrapper">
                    <header>
                        <div className="fr-breadcrumbs u-only-pc">
                            <ol className="fr-breadcrumbs_inner">
                                <li className="fr-breadcrumbs_item">
                                    <a className="fr-breadcrumbs_itemLink" href="/">ユニクロTOP</a>
                                </li>
                                <li className="fr-breadcrumbs_item">
                                    <a className="fr-breadcrumbs_itemLink" href="/women">WOMEN TOP</a>
                                </li>
                                <li className="fr-breadcrumbs_item">
                                    <a className="fr-breadcrumbs_itemLink" href="/bottoms">WOMEN トップスラインナップ</a>
                                </li>
                                <li className="fr-breadcrumbs_item">
                                    <a className="fr-breadcrumbs_itemLink" href="/fleece">WOMEN フリース</a>
                                </li>
                                <li className="fr-breadcrumbs_item">フリース特集</li>
                            </ol>
                        </div>
                    </header>
                    <nav className="fr-tabs">
                        <ul className="fr-tabs_inner">
                            <li className={"fr-tabs_item -en" + (tagIndex === 0 ? ' -active' : '')} >
                                <a className="fr-tabs_itemLink" onClick={this.changeTab.bind(this, 0)} >
                                    <span className="fr-tabs_itemInner">WOMEN</span>
                                </a>
                            </li>
                            <li className={"fr-tabs_item -en" + (tagIndex === 1 ? ' -active' : '')}>
                                <div className="fr-tabs_itemLink" onClick={this.changeTab.bind(this, 1)}>
                                    <span className="fr-tabs_itemInner">MEN</span>
                                </div>
                            </li>
                            <li className={"fr-tabs_item -en" + (tagIndex === 2 ? ' -active' : '')}>
                                <a className="fr-tabs_itemLink" onClick={this.changeTab.bind(this, 2)}>
                                    <span className="fr-tabs_itemInner">KIDS</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Main tagName={this.state.tagName} />
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="main_inner">
                    <h1 className="fr-heading -h1 fr-sp-px-1g fr-sp-py-l fr-pc-py-l">ショートパンツ特集</h1>
                    <h1 className="fr-heading -h1 fr-sp-px-1g fr-sp-py-l fr-pc-py-l">{this.props.tagName}</h1>

                </div>
            </main>
        )
    }
}

export default Feature;