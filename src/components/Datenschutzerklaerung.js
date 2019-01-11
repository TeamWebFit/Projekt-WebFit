import React, { Component } from 'react';
import { } from 'react-bootstrap';
import $ from 'jquery';

// ===================
// Datenschutz Component
// Properties: type[btn-basic, btn-black, btn-ghost, btn-blueline, btn-redline, btn-orangeline, btn-blackline, btn-whiteline, btn-round], message, onClick
// ===================

class Data extends Component {
    componentDidMount() {

        // $('.toggle-header').click(function () {
        //     $('.toggle-header').toggle();
        //     $('.toggle-text').hide();
        // })
        // $('.toggle-header').click(function () {
        //     $('.toggle-header').toggle();
        //     $('.toggle-text').show();
        // })
        $(".toggle-header").click(function () {
            var txt = $(".toggle-text").is(':visible') ? 'Benennung der verantwortlichen Stelle' : 'Benennung der verantwortlichen Stelle';
            $(".toggle-header").text(txt);
            $(".toggle-text").slideToggle();
        });

    }

    onClick(event) {
        $(event.currentTarget).next().toggle();

    }


    render() {
        return (
            <div >

                <h2>Datenschutzerklärung</h2>
                <br />
                <div className="">
                <h4 className="pointer" onClick={this.onClick}>Allgemeiner Hinweis und Pflichtinformationen <i className="fa fa-angle-down"></i></h4>
                
        
                    <div className="toggle-txt">
                    <p className="" ><strong>Benennung der verantwortlichen Stelle </strong></p>

                        <p >Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <p><span id="s3-t-firma">Name der Firma</span>
                            <br />
                            <span id="s3-t-ansprechpartner">Ansprechpartner</span>
                            <br />
                            <span id="s3-t-strasse">Straße und Hausnummer</span>
                            <br /><span id="s3-t-plz">PLZ</span>
                            <span id="s3-t-ort">Ort</span>
                        </p>
                        <p></p>
                        <p>
                            Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
                            <br />
                             von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
                        </p>
                    </div>
                </div>
                <hr />
                <div>
                    <h4 className="pointer" onClick={this.onClick}>Widerruf Ihrer Einwilligung zur Datenverarbeitung <i className="fa fa-angle-down"></i></h4>
                    <div className="toggle-txt">
                        <p>
                            Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. <br />
                            Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt <br />
                            eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung <br />
                            bleibt vom Widerruf unberührt.
                    </p>
                    </div>
                </div>
                <hr />
                <div>
                   
                    <h4  className="pointer" onClick={this.onClick}>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde <i className="fa fa-angle-down"></i></h4>
                    <div className="toggle-txt">
                    <p>
                        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein<br />
                        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde<br />
                        bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des<br />
                        Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link<br />
                        stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:<br />
                     <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                            target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <h4 className="pointer" onClick={this.onClick}>Recht auf Datenübertragbarkeit <i className="fa fa-angle-down"></i></h4>
                <div className="toggle-txt">
                    <p>
                        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in<br />
                        Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen<br />
                        zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format.<br />
                        Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen,<br />
                        erfolgt dies nur, soweit es technisch machbar ist.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <h4 className="pointer" onClick={this.onClick}>Recht auf Auskunft, Berichtigung, Sperrung, Löschung <i className="fa fa-angle-down"></i></h4>
                <div className="toggle-txt">
                    <p>
                        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das<br />
                        Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,<br />
                        Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein<br />
                        Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch<br />
                        zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über<br />
                        die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <h4 className="pointer" onClick={this.onClick}>SSL- bzw. TLS-Verschlüsselung <i className="fa fa-angle-down"></i></h4>
                <div className="toggle-txt">
                    <p>
                        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an<br />
                        uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung.<br />
                        Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar.<br />
                        Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers<br />
                        und am Schloss-Symbol in der Browserzeile.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <h4 className="pointer" onClick={this.onClick}>Server-Log-Dateien <i className="fa fa-angle-down"></i></h4>
                <div className="toggle-txt">
                    <p>
                        In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen,<br />
                         die Ihr Browser automatisch an uns übermittelt. Dies sind:<br />
                     </p>
                    <ul>
                        <li>Besuchte Seite auf unserer Domain</li>
                        <li>Datum und Uhrzeit der Serveranfrage</li>
                        <li>Browsertyp und Browserversion</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>IP-Adresse</li>
                    </ul>
                    <p>
                        Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt.<br />
                        Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung<br />
                        von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.<br />
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <h4 className="pointer" onClick={this.onClick}>Registrierung auf dieser Website <i className="fa fa-angle-down"></i></h4>
                <div className="toggle-txt">
                    <p>
                        Zur Nutzung bestimmter Funktionen können Sie sich auf unserer Website registrieren.<br />
                        Die übermittelten Daten dienen ausschließlich zum Zwecke der Nutzung des jeweiligen<br />
                        Angebotes oder Dienstes. Bei der Registrierung abgefragte Pflichtangaben sind vollständig<br />
                        anzugeben. Andernfalls werden wir die Registrierung ablehnen.
                    </p>
                    <p>
                        Im Falle wichtiger Änderungen, etwa aus technischen Gründen, informieren wir Sie per E-Mail.<br />
                         Die E-Mail wird an die Adresse versendet, die bei der Registrierung angegeben wurde.
                     </p>
                    <p>
                        Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage<br />
                        Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten<br />
                        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung<br />
                        per E-Mail. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                    <p>
                        Wir speichern die bei der Registrierung erfassten Daten während des Zeitraums,<br />
                        den Sie auf unserer Website registriert sind. Ihren Daten werden gelöscht, sollten<br />
                        Sie Ihre Registrierung aufheben. Gesetzliche Aufbewahrungsfristen bleiben unberührt.<br />
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <h4 className="pointer" onClick={this.onClick}>Kontaktformular <i className="fa fa-angle-down"></i></h4>
                <div className="toggle-txt">
                    <p>
                        Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert,<br />
                        um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen.<br />
                        Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
                    </p>
                    <p>
                        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf<br />
                        Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten<br />
                        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail.<br />
                        Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                    </p>
                    <p>
                        Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung<br />
                        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der<br />
                        Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen -<br />
                        insbesondere Aufbewahrungsfristen - bleiben unberührt.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <h4 className="pointer" onClick={this.onClick}>Cookies <i className="fa fa-angle-down"></i></h4>
                <div className="toggle-txt">
                    <p>
                        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf<br />
                        Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher,<br />
                        effektiver und sicherer zu machen.
                    </p>
                    <p>
                        Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung<br />
                         von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie<br />
                         diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website<br />
                         wiederzuerkennen.
                     </p>
                    <p>
                        Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen,<br />
                        einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren,<br />
                        dass Cookies mit dem Schließen des Programms von selbst gelöscht werden.<br />
                        Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website<br />
                        zur Folge haben.
                    </p>
                    <p>
                        Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der<br />
                        Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind,<br />
                        erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir<br />
                        ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und<br />
                        reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies<br />
                        (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.
                    </p>
                </div>
            </div>
            <hr />
            <p><small>Quelle: Datenschutz-Konfigurator von <a href="http://www.mein-datenschutzbeauftragter.de" target="_blank">mein-datenschutzbeauftragter.de</a></small></p>
            </div >
        )
    }
}

export default Data;