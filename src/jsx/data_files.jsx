var React = require("react");

class DataFiles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="dm-card card-default">
          <div className="dm-card-header card-header" id="#example-files">
            Example Files
          </div>
        </div>
        <div>
          <a
            href="/assets/Flu.fasta"
            role="button"
            className="btn dm-btn-primary btn-primary"
          >
            Influenza A H5N1 hemagluttinin
          </a>
          <a
            href="/assets/pol.nex"
            role="button"
            className="btn dm-btn-primary btn-primary"
          >
            HIV-1 pol (recombinant data)
          </a>
        </div>
        <br />
        <br />
        <div className="dm-card card-default">
          <div className="dm-card-header card-header" id="data-files">
            Data Files
          </div>
        </div>
        <h3>General Remarks</h3>
        <p>
          <strong>
            To perform a selection analysis, datamonkey.org needs a multiple
            alignment of at least three homologous coding nucleotide sequences.
            Codon based methods for estimating dN and dS can be applied to any
            sequence alignment, but there are several considerations to keep in
            mind:
          </strong>
        </p>
        <p>
          <li>
          Ideally, the alignment should represent a single gene, or protein
          product, sampled over multiple taxa (e.g. mammalian interferon genes),
          or a diverse population sample (e.g. Influenza A viruses infecting
          different individuals). Because comparative methods estimate relative
          rates of synonymous and non-synonymous substitution, substantial
          sequence diversity is needed for reliable inference.
          </li>
          <li>
              For example when, 
          <a href = "https://www.pnas.org/content/106/16/6700.short">
          Suzuki and Nei </a> applied a REL-type method to a very low divergence (1
          or 2 substitutions per sequence along a star phylogeny) sample of the
          Human T-lymphotropic virus (HTLV), they found that the method
          performed poorly.
          </li>
          <li>
            <a href = ""> Yang </a> and colleagues have suggested that the total
          length of the phylogenetic tree should be at least one expected
          substitution per codon site, but it is impossible to give a generally
          valid range for desirable sequence divergence.
          </li>
          <li>
          However, sequences that are too divergent could lead to saturation, i.e. our inability to
          reliably infer branch lengths and substitution parameters. The number
          of sequences in the alignment is important: too few sequences will
          contain too little information for meaningful inference, while too
          many may take too long to run. 
          </li>  
          <li>  
          As a rule of
          thumb, at least 10 sequences are needed to detect selection at a
          single site (SLAC/FEL/REL) with any degree of reliability, while
          as few as 4 may be sufficient for alignment-wide inference
          (BUSTED). For information about typical datasets sizes gathered from other DataMonkey users see: 
            <a href= "http://www.datamonkey.org/stats#"> Usage Statistics</a>
          </li>
          <li>  
            Comparative methods are ill suited to
          study certain kinds of selection. For example, they should not be
          applied to the detection of selective sweeps (rapid replacement of one
          allele with a more fit one, resulting in a homogeneous population),
          unless sequences sampled prior to and following the selective sweep
          are included in the sample. A number of publications have dealt with
            this issue extensively (e.g. <a href= "http://www.hyphy.org/pubs/hyphybook2007.pdf"> Selection using HyPhy </a>), and we refer an
          interested reader to one of these works for further insight.
         </li>
        </p>
        <hr />
        <p>
          It is a good practice to visually inspect your data to make sure that
          the sequences are alignment correctly. Of course, one can never be
          sure that an alignment is objectively correct, but gross misalignments
          (e.g. sequences that are out of frame) are easy to spot with software
          that provides a graphical visualization of the alignment. Datamonkey uses the HyPhy package as its
          processing engine, and if an alignment does not open in HyPhy on your
          machine (see <a href = "http://hyphy.org/getting-started/">HyPhy</a> for info about running HyPhy), then it will not
          be properly read by Datamonkey.
        </p>
        <hr />
        <p>
          <li>
          You should verify that the alignment is in frame, i.e. that it does
          not contain stop codons, including premature stop codons (indicative
          of a frame shift, e.g. due to misalignment, or a non-functional coding
          sequence) and the terminal stop codon. 
          </li>
          <li>
          Your alignment should exclude
          any non-coding region of the nucleotide sequence, such as introns or
          promoter regions, for which existing models of codon substitution
          would not apply.
          </li>
          <li>
            When coding nucleotide sequences are aligned
          directly, frameshifting (i.e. not in multiples of 3) gaps may be
          inserted, since the alignment program often does not take the coding
          nature of the sequence into account. Therefore it is generally a good
          idea to use a codon-aware aligner like <a href="https://github.com/veg/hyphy-analyses/tree/master/codon-msa"> Codon-MSA</a> 
          or align translated protein sequences and then map them back onto
          constituent nucleotides.
          </li>
          <li>
          Datamonkey will perform a number of checks
          when it receives coding sequences and report all problems it
          encounters.
          </li>
        </p>
        <hr />
        <p>
          If the alignment contains identical sequences, Datamonkey will discard
          all but one copy before proceeding. This is done to speed up the
          analyses, because identical sequences do not contribute any
          information to the likelihood inference procedure (except via base
          frequencies), but the computational complexity of phylogenetic
          analyses grows with the number of sequences.
        </p>
        <hr />
        <p>
          Finally, Datamonkey may rename some of the sequences to conform to
          HyPhy naming conventions for technical reasons (all sequence names
          must be valid identifiers, e.g. they cannot contain spaces). This is
          done automatically and has no effect on the subsequent analyses.
        </p>
        <br />
        <h3>Common issues</h3>
        <div className="bs-callout bs-callout-danger">
          <h4>Non-text files</h4>
          Datamonkey expects sequence alignments to be uploaded as text files ie, .fasta, .nex, .txt.
          Any other format (Word, RTF, PDF) will not be recognized and must be
          converted into plain text prior to submission.
        </div>
        <div className="bs-callout bs-callout-danger">
          <h4>Nonstandard characters in the alignment</h4>
          For instance, BioEdit may use the tilde ('~') character to denote a
          gap. The dot ('.') character is sometimes used as "match the first
          sequence" character and sometimes as the gap character. Datamonkey
          will accept 
          <a href="http://www.insdc.org/documents/feature_table.html#7.4.1">
            IUPAC nucleotide characters
          </a>{" "}
          (ACGT/U and ambiguity characters) and '?', 'X', 'N' or '-' for gap or
          missing data (Datamonkey is not case sensitive). All other characters
          in sequence data will be skipped and could result in frame shifts.
        </div>
        <div className="bs-callout bs-callout-danger">
          <h4>Uploading an amino-acid alignment</h4>
          Current Datamonkey methods do <b> not </b> support amino scid alignments.
        </div>
        <div className="bs-callout bs-callout-danger">
          <h4>Termination codons</h4>
          Datamonkey will reject any alignments that contains stop codons, even
          if the stop codon is at the end of the sequence (i.e. is a proper
          termination codon). Please strip all stop codons out of the alignment
          prior to uploading it. This can be done with the command line version of
          HyPhy using the <a href="https://github.com/veg/hyphy/blob/master/res/TemplateBatchFiles/CleanStopCodons.bf"> CleanStopCodons.bf </a>        
        </div>
        <div className="bs-callout bs-callout-danger">
          <h4>Alignments that are too gappy</h4>
          If an alignment contains more than 50% of indels, it may not be
          properly processed (e.g. it could be read as a protein alignment,
          depending on the alignment format).
        </div>
        <div className="bs-callout bs-callout-danger">
          <h4>Alignments that are too large</h4>
          If your alignment exceeds the size currently allowed by Datamonkey,
          consider running your analysis locally in HyPhy. A detailed discussion
          of how HyPhy can be used for that purpose can be found in{" "}
          <a
            href="http://hyphy.org/resources/tutorial-2017.pdf"
            className="REFERENCE"
          >
            Tutorial
          </a> 
          .
        </div>
        <div className="bs-callout bs-callout-danger">
          <h4>Incorrect genetic code</h4>
          If the genetic code is misspecified (e.g. the mitochondrial code is
          applied to nuclear sequences), valid alignments may fail to upload and
          if they do, then the results may be compromised (because codons are
          mistranslated). Make sure the correct genetic code is selected on the
          data upload page.
        </div>
        <div className="dm-card card-default">
          <div className="dm-card-header card-header">
            Genetic Codes
          </div>
        </div>
        <h3>Universal Genetic Code</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Amino acid</td>
            <td> Codons</td>
          </tr>
          <tr>
            <td>Phe</td>
            <td>TTC,TTT</td>
          </tr>
          <tr>
            <td>Leu</td>
            <td>CTA,CTC,CTG,CTT,TTA,TTG</td>
          </tr>
          <tr>
            <td>Ile</td>
            <td>ATA,ATC,ATT</td>
          </tr>
          <tr>
            <td>Met</td>
            <td>ATG</td>
          </tr>
          <tr>
            <td>Val</td>
            <td>GTA,GTC,GTG,GTT</td>
          </tr>
          <tr>
            <td>Ser</td>
            <td>AGC,AGT,TCA,TCC,TCG,TCT</td>
          </tr>
          <tr>
            <td>Pro</td>
            <td>CCA,CCC,CCG,CCT</td>
          </tr>
          <tr>
            <td>Thr</td>
            <td>ACA,ACC,ACG,ACT</td>
          </tr>
          <tr>
            <td>Ala</td>
            <td>GCA,GCC,GCG,GCT</td>
          </tr>
          <tr>
            <td>Tyr</td>
            <td>TAC,TAT</td>
          </tr>
          <tr>
            <td>His</td>
            <td>CAC,CAT</td>
          </tr>
          <tr>
            <td>Gln</td>
            <td>CAA,CAG</td>
          </tr>
          <tr>
            <td>Asn</td>
            <td>AAC,AAT</td>
          </tr>
          <tr>
            <td>Lys</td>
            <td>AAA,AAG</td>
          </tr>
          <tr>
            <td>Asp</td>
            <td>GAC,GAT</td>
          </tr>
          <tr>
            <td>Glu</td>
            <td>GAA,GAG</td>
          </tr>
          <tr>
            <td>Cys</td>
            <td>TGC, TGT</td>
          </tr>
          <tr>
            <td>Trp</td>
            <td>TGG</td>
          </tr>
          <tr>
            <td>Arg</td>
            <td>AGA,AGG,CGA,CGC,CGG,CGT</td>
          </tr>
          <tr>
            <td>Gly</td>
            <td>GGA,GGC,GGG,GGT</td>
          </tr>
          <tr>
            <td>Stop</td>
            <td>TAA,TAG,TGA</td>
          </tr>
        </table>
        <div className="bs-callout bs-callout-warning">
          <p>
            Other genetic codes are defined in terms of differences with the
            Universal code.
          </p>
        </div>
        <br />
        <h3>Vertebrate mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>AGA</td>
            <td>Stop</td>
          </tr>
          <tr>
            <td>AGG</td>
            <td>Stop</td>
          </tr>
          <tr>
            <td>ATA</td>
            <td>Met</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Trp</td>
          </tr>
        </table>
        <br />
        <h3>Yeast mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>ATA</td>
            <td>Met</td>
          </tr>
          <tr>
            <td>CTA</td>
            <td>Thr</td>
          </tr>
          <tr>
            <td>CTC</td>
            <td>Thr</td>
          </tr>
          <tr>
            <td>CTG</td>
            <td>Thr</td>
          </tr>
          <tr>
            <td>CTT</td>
            <td>Thr</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Trp</td>
          </tr>
        </table>
        <br />
        <h3>Mold, Protozoan and Coelenterate mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Trp</td>
          </tr>
        </table>
        <br />
        <h3>Invertebrate mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>AGA</td>
            <td>Ser</td>
          </tr>
          <tr>
            <td>AGG</td>
            <td>Ser</td>
          </tr>
          <tr>
            <td>ATA</td>
            <td>Met</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Trp</td>
          </tr>
        </table>
        <br />
        <h3>Ciliate Nuclear Code</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>TAA</td>
            <td>Gln</td>
          </tr>
          <tr>
            <td>TAG</td>
            <td>Gln</td>
          </tr>
        </table>
        <br />
        <h3>Echinoderm mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>AAA</td>
            <td>Asn</td>
          </tr>
          <tr>
            <td>AGA</td>
            <td>Ser</td>
          </tr>
          <tr>
            <td>AGG</td>
            <td>Ser</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Trp</td>
          </tr>
        </table>
        <br />
        <h3>Euplotid mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Cys</td>
          </tr>
        </table>
        <br />
        <h3>Alternative Yeast Nuclear</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td height="19">CTG</td>
            <td>Ser</td>
          </tr>
        </table>
        <br />
        <h3>Ascidian mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>AGA</td>
            <td>Gly</td>
          </tr>
          <tr>
            <td>AGG</td>
            <td>Gly</td>
          </tr>
          <tr>
            <td>AGG</td>
            <td>Met</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Trp</td>
          </tr>
        </table>
        <br />
        <h3>Flatworm mtDNA</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>AAA</td>
            <td>Asn</td>
          </tr>
          <tr>
            <td>AGA</td>
            <td>Ser</td>
          </tr>
          <tr>
            <td>AGG</td>
            <td>Ser</td>
          </tr>
          <tr>
            <td>TAA</td>
            <td>Tyr</td>
          </tr>
          <tr>
            <td>TGA</td>
            <td>Trp</td>
          </tr>
        </table>
        <br />
        <h3>Blepharisma Nuclear</h3>
        <table className="table table-bordered table-striped">
          <tr>
            <td> Codon</td>
            <td> New translation</td>
          </tr>
          <tr>
            <td>TAG</td>
            <td>Gln</td>
          </tr>
        </table>
        <br />
        <div className="dm-card card-default">
          <div className="dm-card-header card-header">Data Formats</div>
        </div>
        <p>
          Datamonkey automatically recognizes five aligned sequence data formats
          and also autodetects whether the data is nucleotide (codon) or
          aminoacid.
        </p>
        <div className="bs-callout bs-callout-warning">
          <h4>NEXUS</h4>
          <p>
            The following NEXUS blocks are supported: <code>DATA</code>,{" "}
            <code>CHARACTERS</code>,<code>TAXA</code>, <code>ASSUMPTIONS</code>{" "}
            (for data partitioning) and <code>TREES</code>.
          </p>
        </div>
        <div className="bs-callout bs-callout-warning">
          <h4>PHYLIP</h4>
          <p>
            PHYLIP option characters in the first line are ignored for both
            sequential and interleaved formats.
          </p>
        </div>
        <div className="bs-callout bs-callout-warning">
          <h4>FASTA</h4>
          <ul>
            <li>
              <b>Sequential:</b> Taxa names are preceded by <code>></code> (or{" "}
              <code>#</code>
              ), and complete sequence data follow the name of the taxon.
            </li>
            <li>
              <b>Interleaved:</b> List of taxa names preceded by <code>></code>{" "}
              (or <code>#_ </code>, and blocks of sequence data follow in the
              same order as the names of the taxa.
            </li>
          </ul>
        </div>
        For examples of each format, please visit the{" "}
        <a href="http://hyphy.org/w/index.php/DATA_FILE_PRINT_FORMAT">
          hyphy wiki page
        </a>
        <hr />
      </div>
    );
  }
}

module.exports = DataFiles;
