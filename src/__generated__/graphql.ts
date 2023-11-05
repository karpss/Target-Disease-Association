/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
};

export type ApiVersion = {
  __typename?: 'APIVersion';
  x: Scalars['String']['output'];
  y: Scalars['String']['output'];
  z: Scalars['String']['output'];
};

/** Significant adverse event entries */
export type AdverseEvent = {
  __typename?: 'AdverseEvent';
  /** Number of reports mentioning drug and adverse event */
  count: Scalars['Long']['output'];
  /** Log-likelihood ratio */
  logLR: Scalars['Float']['output'];
  /** 8 digit unique meddra identification number */
  meddraCode?: Maybe<Scalars['String']['output']>;
  /** Meddra term on adverse event */
  name: Scalars['String']['output'];
};

/** Significant adverse events inferred from FAERS reports */
export type AdverseEvents = {
  __typename?: 'AdverseEvents';
  /** Total significant adverse events */
  count: Scalars['Long']['output'];
  /** LLR critical value to define significance */
  criticalValue: Scalars['Float']['output'];
  /** Significant adverse event entries */
  rows: Array<AdverseEvent>;
};

export type Aggregation = {
  __typename?: 'Aggregation';
  aggs?: Maybe<Array<Aggregation>>;
  key: Scalars['String']['output'];
  uniques: Scalars['Long']['output'];
};

export type AggregationFilter = {
  name: Scalars['String']['input'];
  path: Array<Scalars['String']['input']>;
};

export type Aggregations = {
  __typename?: 'Aggregations';
  aggs: Array<NamedAggregation>;
  uniques: Scalars['Long']['output'];
};

/** Associated Disease Entity */
export type AssociatedDisease = {
  __typename?: 'AssociatedDisease';
  datasourceScores: Array<ScoredComponent>;
  datatypeScores: Array<ScoredComponent>;
  /** Disease */
  disease: Disease;
  score: Scalars['Float']['output'];
};

export type AssociatedDiseases = {
  __typename?: 'AssociatedDiseases';
  aggregations?: Maybe<Aggregations>;
  count: Scalars['Long']['output'];
  datasources: Array<DatasourceSettings>;
  /** Associated Targets using (On the fly method) */
  rows: Array<AssociatedDisease>;
};

/** Associated Target Entity */
export type AssociatedTarget = {
  __typename?: 'AssociatedTarget';
  datasourceScores: Array<ScoredComponent>;
  datatypeScores: Array<ScoredComponent>;
  score: Scalars['Float']['output'];
  /** Target */
  target: Target;
};

export type AssociatedTargets = {
  __typename?: 'AssociatedTargets';
  aggregations?: Maybe<Aggregations>;
  count: Scalars['Long']['output'];
  datasources: Array<DatasourceSettings>;
  /** Associated Targets using (On the fly method) */
  rows: Array<AssociatedTarget>;
};

export type BiologicalModels = {
  __typename?: 'BiologicalModels';
  allelicComposition: Scalars['String']['output'];
  geneticBackground: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  literature?: Maybe<Array<Scalars['String']['output']>>;
};

export type CancerHallmark = {
  __typename?: 'CancerHallmark';
  description: Scalars['String']['output'];
  impact?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  pmid: Scalars['Long']['output'];
};

export type CellType = {
  __typename?: 'CellType';
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  reliability: Scalars['Boolean']['output'];
};

export type ChemicalProbe = {
  __typename?: 'ChemicalProbe';
  control?: Maybe<Scalars['String']['output']>;
  drugId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isHighQuality: Scalars['Boolean']['output'];
  mechanismOfAction?: Maybe<Array<Scalars['String']['output']>>;
  origin?: Maybe<Array<Scalars['String']['output']>>;
  probeMinerScore?: Maybe<Scalars['Float']['output']>;
  probesDrugsScore?: Maybe<Scalars['Float']['output']>;
  scoreInCells?: Maybe<Scalars['Float']['output']>;
  scoreInOrganisms?: Maybe<Scalars['Float']['output']>;
  targetFromSourceId: Scalars['String']['output'];
  urls: Array<ChemicalProbeUrl>;
};

export type ChemicalProbeUrl = {
  __typename?: 'ChemicalProbeUrl';
  niceName: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Constraint = {
  __typename?: 'Constraint';
  constraintType: Scalars['String']['output'];
  exp?: Maybe<Scalars['Float']['output']>;
  obs?: Maybe<Scalars['Long']['output']>;
  oe?: Maybe<Scalars['Float']['output']>;
  oeLower?: Maybe<Scalars['Float']['output']>;
  oeUpper?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  upperBin?: Maybe<Scalars['Long']['output']>;
  upperBin6?: Maybe<Scalars['Long']['output']>;
  upperRank?: Maybe<Scalars['Long']['output']>;
};

export type DataVersion = {
  __typename?: 'DataVersion';
  iteration: Scalars['String']['output'];
  month: Scalars['String']['output'];
  year: Scalars['String']['output'];
};

export type DatasourceSettings = {
  __typename?: 'DatasourceSettings';
  id: Scalars['String']['output'];
  propagate: Scalars['Boolean']['output'];
  weight: Scalars['Float']['output'];
};

export type DatasourceSettingsInput = {
  id: Scalars['String']['input'];
  propagate: Scalars['Boolean']['input'];
  weight: Scalars['Float']['input'];
};

export type DepMapEssentiality = {
  __typename?: 'DepMapEssentiality';
  screens: Array<GeneEssentialityScreen>;
  tissueId?: Maybe<Scalars['String']['output']>;
  tissueName?: Maybe<Scalars['String']['output']>;
};

/** Disease or phenotype entity */
export type Disease = {
  __typename?: 'Disease';
  ancestors: Array<Scalars['String']['output']>;
  /** associations on the fly */
  associatedTargets: AssociatedTargets;
  /** Disease children entities in ontology */
  children: Array<Disease>;
  /** List of external cross reference IDs */
  dbXRefs?: Maybe<Array<Scalars['String']['output']>>;
  descendants: Array<Scalars['String']['output']>;
  /** Disease description */
  description?: Maybe<Scalars['String']['output']>;
  /** List of direct location Disease terms */
  directLocationIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Direct Location disease terms */
  directLocations: Array<Disease>;
  /** The complete list of all possible datasources */
  evidences: Evidences;
  /** Open Targets disease id */
  id: Scalars['String']['output'];
  /** List of indirect location Disease terms */
  indirectLocationIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Indirect Location disease terms */
  indirectLocations: Array<Disease>;
  /** Is disease a therapeutic area itself */
  isTherapeuticArea: Scalars['Boolean']['output'];
  /** Clinical precedence for investigational or approved drugs indicated for disease and curated mechanism of action */
  knownDrugs?: Maybe<KnownDrugs>;
  /** Return the list of publications that mention the main entity, alone or in combination with other entities */
  literatureOcurrences: Publications;
  /** Disease name */
  name: Scalars['String']['output'];
  /** List of obsolete diseases */
  obsoleteTerms?: Maybe<Array<Scalars['String']['output']>>;
  /** RNA and Protein baseline expression */
  otarProjects: Array<OtarProject>;
  /** Disease parents entities in ontology */
  parents: Array<Disease>;
  /** Phenotype from HPO index */
  phenotypes?: Maybe<DiseaseHpOs>;
  /** Return similar labels using a model Word2CVec trained with PubMed */
  similarEntities: Array<Similarity>;
  /** Disease synonyms */
  synonyms?: Maybe<Array<DiseaseSynonyms>>;
  /** Ancestor therapeutic area disease entities in ontology */
  therapeuticAreas: Array<Disease>;
};


/** Disease or phenotype entity */
export type DiseaseAssociatedTargetsArgs = {
  BFilter?: InputMaybe<Scalars['String']['input']>;
  Bs?: InputMaybe<Array<Scalars['String']['input']>>;
  aggregationFilters?: InputMaybe<Array<AggregationFilter>>;
  datasources?: InputMaybe<Array<DatasourceSettingsInput>>;
  enableIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  orderByScore?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Pagination>;
};


/** Disease or phenotype entity */
export type DiseaseEvidencesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  datasourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  enableIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  ensemblIds: Array<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Disease or phenotype entity */
export type DiseaseKnownDrugsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  freeTextQuery?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Disease or phenotype entity */
export type DiseaseLiteratureOcurrencesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  endMonth?: InputMaybe<Scalars['Int']['input']>;
  endYear?: InputMaybe<Scalars['Int']['input']>;
  startMonth?: InputMaybe<Scalars['Int']['input']>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
};


/** Disease or phenotype entity */
export type DiseasePhenotypesArgs = {
  page?: InputMaybe<Pagination>;
};


/** Disease or phenotype entity */
export type DiseaseSimilarEntitiesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  entityNames?: InputMaybe<Array<Scalars['String']['input']>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
};

export type DiseaseCellLine = {
  __typename?: 'DiseaseCellLine';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tissue?: Maybe<Scalars['String']['output']>;
  tissueId?: Maybe<Scalars['String']['output']>;
};

/** Disease and phenotypes annotations */
export type DiseaseHpo = {
  __typename?: 'DiseaseHPO';
  /** List of phenotype annotations. */
  evidence: Array<DiseaseHpoEvidences>;
  /** Disease Entity */
  phenotypeEFO?: Maybe<Disease>;
  /** Phenotype entity */
  phenotypeHPO?: Maybe<Hpo>;
};

/** the HPO project provides a large set of phenotype annotations. Source: Phenotype.hpoa */
export type DiseaseHpoEvidences = {
  __typename?: 'DiseaseHPOEvidences';
  /** One of P (Phenotypic abnormality), I (inheritance), C (onset and clinical course). Might be null (MONDO) */
  aspect?: Maybe<Scalars['String']['output']>;
  /** This refers to the center or user making the annotation and the date on which the annotation was made */
  bioCuration?: Maybe<Scalars['String']['output']>;
  /** Related name from the field diseaseFromSourceId */
  diseaseFromSource: Scalars['String']['output'];
  /** This field refers to the database and database identifier. EG. OMIM */
  diseaseFromSourceId: Scalars['String']['output'];
  /** This field indicates the level of evidence supporting the annotation. */
  evidenceType?: Maybe<Scalars['String']['output']>;
  /** A term-id from the HPO-sub-ontology */
  frequency?: Maybe<Scalars['String']['output']>;
  /** HPO Entity */
  frequencyHPO?: Maybe<Hpo>;
  /** HP terms from the Clinical modifier subontology */
  modifiers: Array<Hpo>;
  /** A term-id from the HPO-sub-ontology below the term Age of onset. */
  onset: Array<Hpo>;
  /** This optional field can be used to qualify the annotation. Values: [True or False] */
  qualifierNot: Scalars['Boolean']['output'];
  /** This field indicates the source of the information used for the annotation (phenotype.hpoa) */
  references: Array<Scalars['String']['output']>;
  /** Possible source mapping: HPO or MONDO */
  resource: Scalars['String']['output'];
  /** This field contains the strings MALE or FEMALE if the annotation in question is limited to males or females. */
  sex?: Maybe<Scalars['String']['output']>;
};

/** List of Phenotypes associated with the disease */
export type DiseaseHpOs = {
  __typename?: 'DiseaseHPOs';
  /** Number of entries */
  count: Scalars['Long']['output'];
  /** List of Disease and phenotypes annotations */
  rows: Array<DiseaseHpo>;
};

export type DiseaseSynonyms = {
  __typename?: 'DiseaseSynonyms';
  relation: Scalars['String']['output'];
  terms: Array<Scalars['String']['output']>;
};

/** Drug/Molecule entity */
export type Drug = {
  __typename?: 'Drug';
  /** Significant adverse events inferred from FAERS reports */
  adverseEvents?: Maybe<AdverseEvents>;
  /** Indications for which there is a phase IV clinical trial */
  approvedIndications?: Maybe<Array<Scalars['String']['output']>>;
  /** Alert on life-threteaning drug side effects provided by FDA */
  blackBoxWarning: Scalars['Boolean']['output'];
  /** Chembl IDs of molecules that descend from current molecule. */
  childMolecules: Array<Drug>;
  crossReferences?: Maybe<Array<DrugReferences>>;
  /** Drug description */
  description?: Maybe<Scalars['String']['output']>;
  /** Drug modality */
  drugType: Scalars['String']['output'];
  /** Warnings present on drug as identified by ChEMBL. */
  drugWarnings: Array<DrugWarning>;
  /** Has drug been withdrawn from the market */
  hasBeenWithdrawn: Scalars['Boolean']['output'];
  /** Open Targets molecule id */
  id: Scalars['String']['output'];
  /** Investigational and approved indications curated from clinical trial records and post-marketing package inserts */
  indications?: Maybe<Indications>;
  /** Alias for maximumClinicalTrialPhase == 4 */
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  /** Curated Clinical trial records and and post-marketing package inserts with a known mechanism of action */
  knownDrugs?: Maybe<KnownDrugs>;
  /** Therapeutic indications for drug based on clinical trial data or post-marketed drugs, when mechanism of action is known" */
  linkedDiseases?: Maybe<LinkedDiseases>;
  /** Molecule targets based on drug mechanism of action */
  linkedTargets?: Maybe<LinkedTargets>;
  /** Return the list of publications that mention the main entity, alone or in combination with other entities */
  literatureOcurrences: Publications;
  /** Maximum phase observed in clinical trial records and post-marketing package inserts */
  maximumClinicalTrialPhase?: Maybe<Scalars['Float']['output']>;
  /** Mechanisms of action to produce intended pharmacological effects. Curated from scientific literature and post-marketing package inserts */
  mechanismsOfAction?: Maybe<MechanismsOfAction>;
  /** Molecule preferred name */
  name: Scalars['String']['output'];
  /** ChEMBL ID of parent molecule */
  parentMolecule?: Maybe<Drug>;
  /** Return similar labels using a model Word2CVec trained with PubMed */
  similarEntities: Array<Similarity>;
  /** Molecule synonyms */
  synonyms: Array<Scalars['String']['output']>;
  /** Drug trade names */
  tradeNames: Array<Scalars['String']['output']>;
  /** Year drug was approved for the first time */
  yearOfFirstApproval?: Maybe<Scalars['Int']['output']>;
};


/** Drug/Molecule entity */
export type DrugAdverseEventsArgs = {
  page?: InputMaybe<Pagination>;
};


/** Drug/Molecule entity */
export type DrugKnownDrugsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  freeTextQuery?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Drug/Molecule entity */
export type DrugLiteratureOcurrencesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  endMonth?: InputMaybe<Scalars['Int']['input']>;
  endYear?: InputMaybe<Scalars['Int']['input']>;
  startMonth?: InputMaybe<Scalars['Int']['input']>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
};


/** Drug/Molecule entity */
export type DrugSimilarEntitiesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  entityNames?: InputMaybe<Array<Scalars['String']['input']>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
};

export type DrugReferences = {
  __typename?: 'DrugReferences';
  reference: Array<Scalars['String']['output']>;
  source: Scalars['String']['output'];
};

/** Drug warnings as calculated by ChEMBL */
export type DrugWarning = {
  __typename?: 'DrugWarning';
  chemblIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Country issuing warning */
  country?: Maybe<Scalars['String']['output']>;
  /** Reason for withdrawal */
  description?: Maybe<Scalars['String']['output']>;
  /** ID of the curated EFO term that represents the adverse outcome */
  efoId?: Maybe<Scalars['String']['output']>;
  /** ID of the curated EFO term that represents the high level warning class */
  efoIdForWarningClass?: Maybe<Scalars['String']['output']>;
  /**  label of the curated EFO term that represents the adverse outcome */
  efoTerm?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  meddraSocCode?: Maybe<Scalars['String']['output']>;
  /** Source of withdrawal information */
  references?: Maybe<Array<DrugWarningReference>>;
  /** High level toxicity category by Meddra System Organ Class */
  toxicityClass?: Maybe<Scalars['String']['output']>;
  /** Either 'black box warning' or 'withdrawn' */
  warningType: Scalars['String']['output'];
  /** Year of withdrawal */
  year?: Maybe<Scalars['Int']['output']>;
};

export type DrugWarningReference = {
  __typename?: 'DrugWarningReference';
  id: Scalars['String']['output'];
  source: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type EntityUnionType = Disease | Drug | Target;

/** Evidence for a Target-Disease pair */
export type Evidence = {
  __typename?: 'Evidence';
  alleleOrigins?: Maybe<Array<Scalars['String']['output']>>;
  allelicRequirements?: Maybe<Array<Scalars['String']['output']>>;
  /** Genetic origin of a population */
  ancestry?: Maybe<Scalars['String']['output']>;
  /** Identifier of the ancestry in the HANCESTRO ontology */
  ancestryId?: Maybe<Scalars['String']['output']>;
  beta?: Maybe<Scalars['Float']['output']>;
  betaConfidenceIntervalLower?: Maybe<Scalars['Float']['output']>;
  betaConfidenceIntervalUpper?: Maybe<Scalars['Float']['output']>;
  biologicalModelAllelicComposition?: Maybe<Scalars['String']['output']>;
  biologicalModelGeneticBackground?: Maybe<Scalars['String']['output']>;
  biologicalModelId?: Maybe<Scalars['String']['output']>;
  biomarkerList?: Maybe<Array<NameDescription>>;
  biomarkerName?: Maybe<Scalars['String']['output']>;
  biomarkers?: Maybe<Biomarkers>;
  biosamplesFromSource?: Maybe<Array<Scalars['String']['output']>>;
  cellLineBackground?: Maybe<Scalars['String']['output']>;
  cellType?: Maybe<Scalars['String']['output']>;
  clinicalPhase?: Maybe<Scalars['Float']['output']>;
  clinicalSignificances?: Maybe<Array<Scalars['String']['output']>>;
  clinicalStatus?: Maybe<Scalars['String']['output']>;
  cohortDescription?: Maybe<Scalars['String']['output']>;
  cohortId?: Maybe<Scalars['String']['output']>;
  cohortPhenotypes?: Maybe<Array<Scalars['String']['output']>>;
  cohortShortName?: Maybe<Scalars['String']['output']>;
  confidence?: Maybe<Scalars['String']['output']>;
  contrast?: Maybe<Scalars['String']['output']>;
  crisprScreenLibrary?: Maybe<Scalars['String']['output']>;
  datasourceId: Scalars['String']['output'];
  datatypeId: Scalars['String']['output'];
  /** Disease evidence */
  disease: Disease;
  diseaseCellLines?: Maybe<Array<DiseaseCellLine>>;
  diseaseFromSource?: Maybe<Scalars['String']['output']>;
  diseaseFromSourceId?: Maybe<Scalars['String']['output']>;
  diseaseFromSourceMappedId?: Maybe<Scalars['String']['output']>;
  diseaseModelAssociatedHumanPhenotypes?: Maybe<Array<LabelledElement>>;
  diseaseModelAssociatedModelPhenotypes?: Maybe<Array<LabelledElement>>;
  drug?: Maybe<Drug>;
  drugFromSource?: Maybe<Scalars['String']['output']>;
  drugResponse?: Maybe<Disease>;
  expectedConfidence?: Maybe<Scalars['String']['output']>;
  geneInteractionType?: Maybe<Scalars['String']['output']>;
  geneticInteractionFDR?: Maybe<Scalars['Float']['output']>;
  geneticInteractionPValue?: Maybe<Scalars['Float']['output']>;
  geneticInteractionScore?: Maybe<Scalars['Float']['output']>;
  /** Evidence identifier */
  id: Scalars['String']['output'];
  interactingTargetFromSourceId?: Maybe<Scalars['String']['output']>;
  interactingTargetRole?: Maybe<Scalars['String']['output']>;
  /** list of pub med publications ids */
  literature?: Maybe<Array<Scalars['String']['output']>>;
  log2FoldChangePercentileRank?: Maybe<Scalars['Long']['output']>;
  log2FoldChangeValue?: Maybe<Scalars['Float']['output']>;
  mutatedSamples?: Maybe<Array<EvidenceVariation>>;
  oddsRatio?: Maybe<Scalars['Float']['output']>;
  /** Confidence interval lower-bound   */
  oddsRatioConfidenceIntervalLower?: Maybe<Scalars['Float']['output']>;
  oddsRatioConfidenceIntervalUpper?: Maybe<Scalars['Float']['output']>;
  pValueExponent?: Maybe<Scalars['Long']['output']>;
  pValueMantissa?: Maybe<Scalars['Float']['output']>;
  pathways?: Maybe<Array<Pathway>>;
  phenotypicConsequenceFDR?: Maybe<Scalars['Float']['output']>;
  phenotypicConsequenceLogFoldChange?: Maybe<Scalars['Float']['output']>;
  phenotypicConsequencePValue?: Maybe<Scalars['Float']['output']>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  /** list of central pub med publications ids */
  pubMedCentralIds?: Maybe<Array<Scalars['String']['output']>>;
  publicationFirstAuthor?: Maybe<Scalars['String']['output']>;
  publicationYear?: Maybe<Scalars['Long']['output']>;
  reactionId?: Maybe<Scalars['String']['output']>;
  reactionName?: Maybe<Scalars['String']['output']>;
  /** Release date */
  releaseDate?: Maybe<Scalars['String']['output']>;
  /** Release version */
  releaseVersion?: Maybe<Scalars['String']['output']>;
  resourceScore?: Maybe<Scalars['Float']['output']>;
  /** Evidence score */
  score: Scalars['Float']['output'];
  significantDriverMethods?: Maybe<Array<Scalars['String']['output']>>;
  /** The statistical method used to calculate the association */
  statisticalMethod?: Maybe<Scalars['String']['output']>;
  /** Overview of the statistical method used to calculate the association */
  statisticalMethodOverview?: Maybe<Scalars['String']['output']>;
  statisticalTestTail?: Maybe<Scalars['String']['output']>;
  studyCases?: Maybe<Scalars['Long']['output']>;
  /** Number of cases in a case-control study that carry at least one allele of the qualifying variant */
  studyCasesWithQualifyingVariants?: Maybe<Scalars['Long']['output']>;
  studyId?: Maybe<Scalars['String']['output']>;
  studyOverview?: Maybe<Scalars['String']['output']>;
  /** Sample size */
  studySampleSize?: Maybe<Scalars['Long']['output']>;
  studyStartDate?: Maybe<Scalars['String']['output']>;
  studyStopReason?: Maybe<Scalars['String']['output']>;
  /** Predicted reason(s) why the study has been stopped based on studyStopReason */
  studyStopReasonCategories?: Maybe<Array<Scalars['String']['output']>>;
  /** Target evidence */
  target: Target;
  targetFromSource?: Maybe<Scalars['String']['output']>;
  targetFromSourceId?: Maybe<Scalars['String']['output']>;
  targetInModel?: Maybe<Scalars['String']['output']>;
  targetModulation?: Maybe<Scalars['String']['output']>;
  targetRole?: Maybe<Scalars['String']['output']>;
  textMiningSentences?: Maybe<Array<EvidenceTextMiningSentence>>;
  urls?: Maybe<Array<LabelledUri>>;
  validationHypotheses?: Maybe<Array<ValidationHypothesis>>;
  variantAminoacidDescriptions?: Maybe<Array<Scalars['String']['output']>>;
  variantFunctionalConsequence?: Maybe<SequenceOntologyTerm>;
  variantFunctionalConsequenceFromQtlId?: Maybe<SequenceOntologyTerm>;
  /** Identifier in HGVS notation of the disease-causing variant */
  variantHgvsId?: Maybe<Scalars['String']['output']>;
  /** Variant evidence */
  variantId?: Maybe<Scalars['String']['output']>;
  /** Variant dbSNP identifier */
  variantRsId?: Maybe<Scalars['String']['output']>;
  /** Warning message */
  warningMessage?: Maybe<Scalars['String']['output']>;
};

export type EvidenceSource = {
  __typename?: 'EvidenceSource';
  datasource: Scalars['String']['output'];
  datatype: Scalars['String']['output'];
};

export type EvidenceTextMiningSentence = {
  __typename?: 'EvidenceTextMiningSentence';
  dEnd: Scalars['Long']['output'];
  dStart: Scalars['Long']['output'];
  section: Scalars['String']['output'];
  tEnd: Scalars['Long']['output'];
  tStart: Scalars['Long']['output'];
  text: Scalars['String']['output'];
};

/** Sequence Ontology Term */
export type EvidenceVariation = {
  __typename?: 'EvidenceVariation';
  functionalConsequence?: Maybe<SequenceOntologyTerm>;
  numberMutatedSamples?: Maybe<Scalars['Long']['output']>;
  numberSamplesTested?: Maybe<Scalars['Long']['output']>;
  numberSamplesWithMutationType?: Maybe<Scalars['Long']['output']>;
};

/** Evidence for a Target-Disease pair */
export type Evidences = {
  __typename?: 'Evidences';
  count: Scalars['Long']['output'];
  cursor?: Maybe<Scalars['String']['output']>;
  rows: Array<Evidence>;
};

export type Expression = {
  __typename?: 'Expression';
  protein: ProteinExpression;
  rna: RnaExpression;
  tissue: Tissue;
};

export type GeneEssentialityScreen = {
  __typename?: 'GeneEssentialityScreen';
  cellLineName?: Maybe<Scalars['String']['output']>;
  depmapId?: Maybe<Scalars['String']['output']>;
  diseaseCellLineId?: Maybe<Scalars['String']['output']>;
  diseaseFromSource?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['Float']['output']>;
  geneEffect?: Maybe<Scalars['Float']['output']>;
  mutation?: Maybe<Scalars['String']['output']>;
};

export type GeneOntology = {
  __typename?: 'GeneOntology';
  aspect: Scalars['String']['output'];
  evidence: Scalars['String']['output'];
  geneProduct: Scalars['String']['output'];
  source: Scalars['String']['output'];
  /** Gene ontology term */
  term: GeneOntologyTerm;
};

export type GeneOntologyTerm = {
  __typename?: 'GeneOntologyTerm';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GenomicLocation = {
  __typename?: 'GenomicLocation';
  chromosome: Scalars['String']['output'];
  end: Scalars['Long']['output'];
  start: Scalars['Long']['output'];
  strand: Scalars['Int']['output'];
};

/** Phenotype entity */
export type Hpo = {
  __typename?: 'HPO';
  /** Phenotype description */
  description?: Maybe<Scalars['String']['output']>;
  /** Open Targets hpo id */
  id: Scalars['String']['output'];
  /** Phenotype name */
  name: Scalars['String']['output'];
  /** namespace */
  namespace?: Maybe<Array<Scalars['String']['output']>>;
};

export type HallmarkAttribute = {
  __typename?: 'HallmarkAttribute';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pmid?: Maybe<Scalars['Long']['output']>;
};

export type Hallmarks = {
  __typename?: 'Hallmarks';
  attributes: Array<HallmarkAttribute>;
  cancerHallmarks: Array<CancerHallmark>;
};

export type Homologue = {
  __typename?: 'Homologue';
  homologyType: Scalars['String']['output'];
  isHighConfidence?: Maybe<Scalars['String']['output']>;
  queryPercentageIdentity: Scalars['Float']['output'];
  speciesId: Scalars['String']['output'];
  speciesName: Scalars['String']['output'];
  targetGeneId: Scalars['String']['output'];
  targetGeneSymbol: Scalars['String']['output'];
  targetPercentageIdentity: Scalars['Float']['output'];
};

export type IdAndSource = {
  __typename?: 'IdAndSource';
  id: Scalars['String']['output'];
  source: Scalars['String']['output'];
};

export type IndicationReference = {
  __typename?: 'IndicationReference';
  ids?: Maybe<Array<Scalars['String']['output']>>;
  source: Scalars['String']['output'];
};

export type IndicationRow = {
  __typename?: 'IndicationRow';
  /** Disease */
  disease: Disease;
  maxPhaseForIndication: Scalars['Float']['output'];
  references?: Maybe<Array<IndicationReference>>;
};

export type Indications = {
  __typename?: 'Indications';
  approvedIndications?: Maybe<Array<Scalars['String']['output']>>;
  count: Scalars['Long']['output'];
  rows: Array<IndicationRow>;
};

export type Interaction = {
  __typename?: 'Interaction';
  count: Scalars['Long']['output'];
  /** List of evidences for this interaction */
  evidences: Array<InteractionEvidence>;
  intA: Scalars['String']['output'];
  intABiologicalRole: Scalars['String']['output'];
  intB: Scalars['String']['output'];
  intBBiologicalRole: Scalars['String']['output'];
  score?: Maybe<Scalars['Float']['output']>;
  sourceDatabase: Scalars['String']['output'];
  speciesA?: Maybe<InteractionSpecies>;
  speciesB?: Maybe<InteractionSpecies>;
  targetA?: Maybe<Target>;
  targetB?: Maybe<Target>;
};

export type InteractionEvidence = {
  __typename?: 'InteractionEvidence';
  evidenceScore?: Maybe<Scalars['Float']['output']>;
  expansionMethodMiIdentifier?: Maybe<Scalars['String']['output']>;
  expansionMethodShortName?: Maybe<Scalars['String']['output']>;
  hostOrganismScientificName?: Maybe<Scalars['String']['output']>;
  hostOrganismTaxId?: Maybe<Scalars['Long']['output']>;
  intASource: Scalars['String']['output'];
  intBSource: Scalars['String']['output'];
  interactionDetectionMethodMiIdentifier: Scalars['String']['output'];
  interactionDetectionMethodShortName: Scalars['String']['output'];
  interactionIdentifier?: Maybe<Scalars['String']['output']>;
  interactionTypeMiIdentifier?: Maybe<Scalars['String']['output']>;
  interactionTypeShortName?: Maybe<Scalars['String']['output']>;
  participantDetectionMethodA?: Maybe<Array<InteractionEvidencePdm>>;
  participantDetectionMethodB?: Maybe<Array<InteractionEvidencePdm>>;
  pubmedId?: Maybe<Scalars['String']['output']>;
};

export type InteractionEvidencePdm = {
  __typename?: 'InteractionEvidencePDM';
  miIdentifier?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type InteractionResources = {
  __typename?: 'InteractionResources';
  databaseVersion: Scalars['String']['output'];
  sourceDatabase: Scalars['String']['output'];
};

export type InteractionSpecies = {
  __typename?: 'InteractionSpecies';
  mnemonic?: Maybe<Scalars['String']['output']>;
  scientificName?: Maybe<Scalars['String']['output']>;
  taxonId?: Maybe<Scalars['Long']['output']>;
};

export type Interactions = {
  __typename?: 'Interactions';
  count: Scalars['Long']['output'];
  rows: Array<Interaction>;
};

/** A key-value pair */
export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** An array of key-value pairs */
export type KeyValueArray = {
  __typename?: 'KeyValueArray';
  items: Array<KeyValue>;
};

/** Clinical precedence entry for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action. Entries are grouped by target, disease, drug, phase, status and mechanism of action */
export type KnownDrug = {
  __typename?: 'KnownDrug';
  approvedName: Scalars['String']['output'];
  /** Drug target approved symbol based on curated mechanism of action */
  approvedSymbol: Scalars['String']['output'];
  /** Clinicaltrials.gov identifiers on entry trials */
  ctIds: Array<Scalars['String']['output']>;
  /** Curated disease indication entity */
  disease?: Maybe<Disease>;
  /** Curated disease indication Open Targets id */
  diseaseId: Scalars['String']['output'];
  /** Curated drug entity */
  drug?: Maybe<Drug>;
  /** Open Targets drug id */
  drugId: Scalars['String']['output'];
  /** Drug modality */
  drugType: Scalars['String']['output'];
  /** Curated disease indication */
  label: Scalars['String']['output'];
  /** Mechanism of Action description */
  mechanismOfAction: Scalars['String']['output'];
  /** Clinical Trial phase */
  phase: Scalars['Float']['output'];
  /** Drug name */
  prefName: Scalars['String']['output'];
  /** Source urls for FDA or package inserts */
  references: Array<KnownDrugReference>;
  /** Trial status */
  status?: Maybe<Scalars['String']['output']>;
  /** Drug target entity based on curated mechanism of action */
  target?: Maybe<Target>;
  /** Drug target class based on curated mechanism of action */
  targetClass: Array<Scalars['String']['output']>;
  /** Drug target Open Targets id based on curated mechanism of action */
  targetId: Scalars['String']['output'];
  /** Source urls from clinical trials */
  urls: Array<Url>;
};

export type KnownDrugReference = {
  __typename?: 'KnownDrugReference';
  ids: Array<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  urls: Array<Scalars['String']['output']>;
};

/** Set of clinical precedence for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action */
export type KnownDrugs = {
  __typename?: 'KnownDrugs';
  /** Total number of entries */
  count: Scalars['Long']['output'];
  cursor?: Maybe<Scalars['String']['output']>;
  /** Clinical precedence entries with known mechanism of action */
  rows: Array<KnownDrug>;
  /** Total unique diseases or phenotypes */
  uniqueDiseases: Scalars['Long']['output'];
  /** Total unique drugs/molecules */
  uniqueDrugs: Scalars['Long']['output'];
  /** Total unique known mechanism of action targetsTotal unique known mechanism of action targets */
  uniqueTargets: Scalars['Long']['output'];
};

export type LabelAndSource = {
  __typename?: 'LabelAndSource';
  label: Scalars['String']['output'];
  source: Scalars['String']['output'];
};

export type LabelledElement = {
  __typename?: 'LabelledElement';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelledUri = {
  __typename?: 'LabelledUri';
  niceName: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Linked Disease Entities */
export type LinkedDiseases = {
  __typename?: 'LinkedDiseases';
  count: Scalars['Int']['output'];
  /** Disease List */
  rows: Array<Disease>;
};

/** Linked Target Entities */
export type LinkedTargets = {
  __typename?: 'LinkedTargets';
  count: Scalars['Int']['output'];
  /** Target List */
  rows: Array<Target>;
};

export type LocationAndSource = {
  __typename?: 'LocationAndSource';
  labelSL?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  source: Scalars['String']['output'];
  termSL?: Maybe<Scalars['String']['output']>;
};

export type Match = {
  __typename?: 'Match';
  endInSentence: Scalars['Long']['output'];
  mappedId: Scalars['String']['output'];
  matchedLabel: Scalars['String']['output'];
  /** Type of the matched label */
  matchedType: Scalars['String']['output'];
  sectionEnd?: Maybe<Scalars['Long']['output']>;
  sectionStart?: Maybe<Scalars['Long']['output']>;
  startInSentence: Scalars['Long']['output'];
};

export type MechanismOfActionRow = {
  __typename?: 'MechanismOfActionRow';
  actionType?: Maybe<Scalars['String']['output']>;
  mechanismOfAction: Scalars['String']['output'];
  references?: Maybe<Array<Reference>>;
  targetName?: Maybe<Scalars['String']['output']>;
  /** Target List */
  targets: Array<Target>;
};

export type MechanismsOfAction = {
  __typename?: 'MechanismsOfAction';
  rows: Array<MechanismOfActionRow>;
  uniqueActionTypes: Array<Scalars['String']['output']>;
  uniqueTargetTypes: Array<Scalars['String']['output']>;
};

export type Meta = {
  __typename?: 'Meta';
  apiVersion: ApiVersion;
  dataVersion: DataVersion;
  name: Scalars['String']['output'];
};

export type ModelPhenotypeClasses = {
  __typename?: 'ModelPhenotypeClasses';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type MousePhenotype = {
  __typename?: 'MousePhenotype';
  biologicalModels: Array<BiologicalModels>;
  modelPhenotypeClasses: Array<ModelPhenotypeClasses>;
  modelPhenotypeId: Scalars['String']['output'];
  modelPhenotypeLabel: Scalars['String']['output'];
  targetInModel: Scalars['String']['output'];
  targetInModelEnsemblId?: Maybe<Scalars['String']['output']>;
  targetInModelMgiId: Scalars['String']['output'];
};

export type NameDescription = {
  __typename?: 'NameDescription';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type NamedAggregation = {
  __typename?: 'NamedAggregation';
  name: Scalars['String']['output'];
  rows: Array<Aggregation>;
  uniques?: Maybe<Scalars['Long']['output']>;
};

export type OtarProject = {
  __typename?: 'OtarProject';
  integratesInPPP: Scalars['Boolean']['output'];
  otarCode: Scalars['String']['output'];
  projectName: Scalars['String']['output'];
  reference: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Pagination = {
  index: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};

/** Pathway entry */
export type Pathway = {
  __typename?: 'Pathway';
  /** Pathway ID */
  id: Scalars['String']['output'];
  /** Pathway Name */
  name: Scalars['String']['output'];
};

export type ProteinExpression = {
  __typename?: 'ProteinExpression';
  cellType: Array<CellType>;
  level: Scalars['Int']['output'];
  reliability: Scalars['Boolean']['output'];
};

export type Publication = {
  __typename?: 'Publication';
  pmcid?: Maybe<Scalars['String']['output']>;
  pmid: Scalars['String']['output'];
  /** Publication Date */
  publicationDate?: Maybe<Scalars['String']['output']>;
  /** Unique counts per matched keyword */
  sentences?: Maybe<Array<Sentence>>;
};

/** Publication list */
export type Publications = {
  __typename?: 'Publications';
  count: Scalars['Long']['output'];
  cursor?: Maybe<Scalars['String']['output']>;
  /** Earliest publication year. */
  earliestPubYear: Scalars['Int']['output'];
  filteredCount: Scalars['Long']['output'];
  rows: Array<Publication>;
};

export type Query = {
  __typename?: 'Query';
  /** The complete list of all possible datasources */
  associationDatasources: Array<EvidenceSource>;
  /** Return a Disease */
  disease?: Maybe<Disease>;
  /** Return Diseases */
  diseases: Array<Disease>;
  /** Return a drug */
  drug?: Maybe<Drug>;
  /** Return drugs */
  drugs: Array<Drug>;
  /** Gene ontology terms */
  geneOntologyTerms: Array<Maybe<GeneOntologyTerm>>;
  /** The complete list of all possible datasources */
  interactionResources: Array<InteractionResources>;
  /** Return Open Targets API metadata information */
  meta: Meta;
  /** Multi entity search */
  search: SearchResults;
  /** Return a Target */
  target?: Maybe<Target>;
  /** Return Targets */
  targets: Array<Target>;
};


export type QueryDiseaseArgs = {
  efoId: Scalars['String']['input'];
};


export type QueryDiseasesArgs = {
  efoIds: Array<Scalars['String']['input']>;
};


export type QueryDrugArgs = {
  chemblId: Scalars['String']['input'];
};


export type QueryDrugsArgs = {
  chemblIds: Array<Scalars['String']['input']>;
};


export type QueryGeneOntologyTermsArgs = {
  goIds: Array<Scalars['String']['input']>;
};


export type QuerySearchArgs = {
  entityNames?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Pagination>;
  queryString: Scalars['String']['input'];
};


export type QueryTargetArgs = {
  ensemblId: Scalars['String']['input'];
};


export type QueryTargetsArgs = {
  ensemblIds: Array<Scalars['String']['input']>;
};

export type RnaExpression = {
  __typename?: 'RNAExpression';
  level: Scalars['Int']['output'];
  unit: Scalars['String']['output'];
  value: Scalars['Float']['output'];
  zscore: Scalars['Long']['output'];
};

export type ReactomePathway = {
  __typename?: 'ReactomePathway';
  pathway: Scalars['String']['output'];
  pathwayId: Scalars['String']['output'];
  topLevelTerm: Scalars['String']['output'];
};

export type Reference = {
  __typename?: 'Reference';
  ids?: Maybe<Array<Scalars['String']['output']>>;
  source: Scalars['String']['output'];
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

export type SafetyBiosample = {
  __typename?: 'SafetyBiosample';
  cellFormat?: Maybe<Scalars['String']['output']>;
  cellId?: Maybe<Scalars['String']['output']>;
  cellLabel?: Maybe<Scalars['String']['output']>;
  tissueId?: Maybe<Scalars['String']['output']>;
  tissueLabel?: Maybe<Scalars['String']['output']>;
};

export type SafetyEffects = {
  __typename?: 'SafetyEffects';
  direction: Scalars['String']['output'];
  dosing?: Maybe<Scalars['String']['output']>;
};

export type SafetyLiability = {
  __typename?: 'SafetyLiability';
  biosamples?: Maybe<Array<SafetyBiosample>>;
  datasource: Scalars['String']['output'];
  effects?: Maybe<Array<SafetyEffects>>;
  event?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  literature?: Maybe<Scalars['String']['output']>;
  studies?: Maybe<Array<SafetyStudy>>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SafetyStudy = {
  __typename?: 'SafetyStudy';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ScoredComponent = {
  __typename?: 'ScoredComponent';
  id: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  category: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entity: Scalars['String']['output'];
  highlights: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  multiplier: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  ngrams?: Maybe<Array<Scalars['String']['output']>>;
  /** Associations for a fixed target */
  object?: Maybe<EntityUnionType>;
  prefixes?: Maybe<Array<Scalars['String']['output']>>;
  score: Scalars['Float']['output'];
};

export type SearchResultAggCategory = {
  __typename?: 'SearchResultAggCategory';
  name: Scalars['String']['output'];
  total: Scalars['Long']['output'];
};

export type SearchResultAggEntity = {
  __typename?: 'SearchResultAggEntity';
  categories: Array<SearchResultAggCategory>;
  name: Scalars['String']['output'];
  total: Scalars['Long']['output'];
};

export type SearchResultAggs = {
  __typename?: 'SearchResultAggs';
  entities: Array<SearchResultAggEntity>;
  total: Scalars['Long']['output'];
};

/** Search results */
export type SearchResults = {
  __typename?: 'SearchResults';
  /** Aggregations */
  aggregations?: Maybe<SearchResultAggs>;
  /** Return combined */
  hits: Array<SearchResult>;
  /** Total number or results given a entity filter */
  total: Scalars['Long']['output'];
};

export type Sentence = {
  __typename?: 'Sentence';
  /** List of matches */
  matches: Array<Match>;
  /** Section of the publication (either title or abstract) */
  section: Scalars['String']['output'];
};

/** Sequence Ontology Term */
export type SequenceOntologyTerm = {
  __typename?: 'SequenceOntologyTerm';
  /** Sequence Ontology ID */
  id: Scalars['String']['output'];
  /** Sequence Ontology Label */
  label: Scalars['String']['output'];
};

export type Similarity = {
  __typename?: 'Similarity';
  category: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Similarity label optionally resolved into an entity */
  object?: Maybe<EntityUnionType>;
  score: Scalars['Float']['output'];
};

/** Target entity */
export type Target = {
  __typename?: 'Target';
  alternativeGenes: Array<Scalars['String']['output']>;
  /** Approved gene name */
  approvedName: Scalars['String']['output'];
  /** HGNC approved symbol */
  approvedSymbol: Scalars['String']['output'];
  /** associations on the fly */
  associatedDiseases: AssociatedDiseases;
  /** Molecule biotype */
  biotype: Scalars['String']['output'];
  chemicalProbes: Array<ChemicalProbe>;
  /** Database cross references */
  dbXrefs: Array<IdAndSource>;
  /** depMapEssentiality */
  depMapEssentiality?: Maybe<Array<DepMapEssentiality>>;
  /** The complete list of all possible datasources */
  evidences: Evidences;
  /** RNA and Protein baseline expression */
  expressions: Array<Expression>;
  /** ... */
  functionDescriptions: Array<Scalars['String']['output']>;
  /** Gene Ontology annotations */
  geneOntology: Array<GeneOntology>;
  /** Symbol synonyms */
  geneticConstraint: Array<Constraint>;
  /** Chromosomic location */
  genomicLocation: GenomicLocation;
  /** Target-modulated essential alterations in cell physiology that dictate malignant growth */
  hallmarks?: Maybe<Hallmarks>;
  /** Gene homologues */
  homologues: Array<Homologue>;
  /** Open Targets target id */
  id: Scalars['String']['output'];
  /** Biological pathway membership from Reactome */
  interactions?: Maybe<Interactions>;
  /** isEssential */
  isEssential?: Maybe<Scalars['Boolean']['output']>;
  /** Clinical precedence for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action */
  knownDrugs?: Maybe<KnownDrugs>;
  /** Return the list of publications that mention the main entity, alone or in combination with other entities */
  literatureOcurrences: Publications;
  /** Biological pathway membership from Reactome */
  mousePhenotypes: Array<MousePhenotype>;
  /** Alternative names */
  nameSynonyms: Array<LabelAndSource>;
  /** Obsolete names */
  obsoleteNames: Array<LabelAndSource>;
  /** Obsolete symbols */
  obsoleteSymbols: Array<LabelAndSource>;
  /** Reactome pathways */
  pathways: Array<ReactomePathway>;
  /** Factors influencing target-specific properties informative in a target prioritisation strategy. Values range from -1 (deprioritised) to 1 (prioritised). */
  prioritisation?: Maybe<KeyValueArray>;
  /** Related protein IDs */
  proteinIds: Array<IdAndSource>;
  /** Known target safety effects and target safety risk information */
  safetyLiabilities: Array<SafetyLiability>;
  /** Return similar labels using a model Word2CVec trained with PubMed */
  similarEntities: Array<Similarity>;
  /** Location of ... */
  subcellularLocations: Array<LocationAndSource>;
  /** Alternative symbols */
  symbolSynonyms: Array<LabelAndSource>;
  /** Alternative names and symbols */
  synonyms: Array<LabelAndSource>;
  targetClass: Array<TargetClass>;
  /** Target Enabling Package (TEP) */
  tep?: Maybe<Tep>;
  /** Target druggability assessment */
  tractability: Array<Tractability>;
  /** Ensembl transcript IDs */
  transcriptIds: Array<Scalars['String']['output']>;
};


/** Target entity */
export type TargetAssociatedDiseasesArgs = {
  BFilter?: InputMaybe<Scalars['String']['input']>;
  Bs?: InputMaybe<Array<Scalars['String']['input']>>;
  aggregationFilters?: InputMaybe<Array<AggregationFilter>>;
  datasources?: InputMaybe<Array<DatasourceSettingsInput>>;
  enableIndirect?: InputMaybe<Scalars['Boolean']['input']>;
  orderByScore?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Pagination>;
};


/** Target entity */
export type TargetEvidencesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  datasourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  efoIds: Array<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Target entity */
export type TargetInteractionsArgs = {
  page?: InputMaybe<Pagination>;
  sourceDatabase?: InputMaybe<Scalars['String']['input']>;
};


/** Target entity */
export type TargetKnownDrugsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  freeTextQuery?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Target entity */
export type TargetLiteratureOcurrencesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  endMonth?: InputMaybe<Scalars['Int']['input']>;
  endYear?: InputMaybe<Scalars['Int']['input']>;
  startMonth?: InputMaybe<Scalars['Int']['input']>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
};


/** Target entity */
export type TargetSimilarEntitiesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  entityNames?: InputMaybe<Array<Scalars['String']['input']>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
};

export type TargetClass = {
  __typename?: 'TargetClass';
  id: Scalars['Long']['output'];
  label: Scalars['String']['output'];
  level: Scalars['String']['output'];
};

/** Target Enabling Package (TEP) */
export type Tep = {
  __typename?: 'Tep';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  therapeuticArea: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

/** Tissue, organ and anatomical system */
export type Tissue = {
  __typename?: 'Tissue';
  /** Anatomical systems membership */
  anatomicalSystems: Array<Scalars['String']['output']>;
  /** UBERON id */
  id: Scalars['String']['output'];
  /** UBERON tissue label */
  label: Scalars['String']['output'];
  /** Organs membership */
  organs: Array<Scalars['String']['output']>;
};

export type Tractability = {
  __typename?: 'Tractability';
  label: Scalars['String']['output'];
  modality: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

/** Source URL for clinical trials, FDA and package inserts */
export type Url = {
  __typename?: 'URL';
  /** resource name */
  name: Scalars['String']['output'];
  /** resource url */
  url: Scalars['String']['output'];
};

export type ValidationHypothesis = {
  __typename?: 'ValidationHypothesis';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Biomarkers = {
  __typename?: 'biomarkers';
  geneExpression?: Maybe<Array<GeneExpression>>;
  variant?: Maybe<Array<Variant>>;
};

export type GeneExpression = {
  __typename?: 'geneExpression';
  id?: Maybe<GeneOntologyTerm>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Variant = {
  __typename?: 'variant';
  functionalConsequenceId?: Maybe<SequenceOntologyTerm>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LungCarcinomaAssociatedTargetsQueryVariables = Exact<{ [key: string]: never; }>;


export type LungCarcinomaAssociatedTargetsQuery = { __typename?: 'Query', disease?: { __typename?: 'Disease', associatedTargets: { __typename?: 'AssociatedTargets', rows: Array<{ __typename?: 'AssociatedTarget', score: number, target: { __typename?: 'Target', id: string, approvedSymbol: string, approvedName: string }, datatypeScores: Array<{ __typename?: 'ScoredComponent', id: string, score: number }> }> } } | null };


export const LungCarcinomaAssociatedTargetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"lungCarcinomaAssociatedTargets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disease"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"efoId"},"value":{"kind":"StringValue","value":"EFO_0001071","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"associatedTargets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"index"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"IntValue","value":"10"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"approvedSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"approvedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"datatypeScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LungCarcinomaAssociatedTargetsQuery, LungCarcinomaAssociatedTargetsQueryVariables>;