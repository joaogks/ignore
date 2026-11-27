// Dados imutáveis do benchmark (69 pontos, 14 pontos de fronteira, 15 links)
window.BENCHMARK_BASE = Object.freeze({
  "yMin": 5,
  "yMax": 75,
  "labelScale": 1,
  "guides": true,
  "points": [
    {
      "v": [
        0.14896024488574383,
        70.44793488685832
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.2",
      "id": "claude-fable-5.2@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.2 max",
      "l": "Fable 5.2",
      "s": true,
      "f": true,
      "title": "Claude Fable 5.2 (Max, Default Fallback)"
    },
    {
      "v": [
        0.03324588232161985,
        64.91777212636212
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-opus-5.5",
      "id": "claude-opus-5.5@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "Opus 5.5 max",
      "l": "Opus 5.5",
      "s": true,
      "f": true,
      "title": "Claude Opus 5.5 (Max, Default Fallback)"
    },
    {
      "v": [
        0.016056976649336197,
        61.74992278276395
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4-neon",
      "id": "gemini-4-neon@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Neon high",
      "l": "Gemini 4 Neon",
      "s": true,
      "f": true,
      "title": "Gemini 4 Neon (High)"
    },
    {
      "v": [
        0.015267251146563004,
        58.234430011647966
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-sonnet-5.5",
      "id": "claude-sonnet-5.5@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "Sonnet 5.5 max",
      "l": "Sonnet 5.5",
      "s": true,
      "f": true,
      "title": "Claude Sonnet 5.5 (Max, Default Fallback)"
    },
    {
      "v": [
        0.0019469150123684635,
        32.40002165354801
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-haiku-5.5",
      "id": "claude-haiku-5.5@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "Haiku 5.5 max",
      "l": "Haiku 5.5",
      "s": true,
      "f": true,
      "title": "Claude Haiku 5.5 (Max)"
    },
    {
      "v": [
        0.004037991566143855,
        32.69969173254507
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-terra",
      "id": "gpt-6.1-terra@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Terra low",
      "l": "GPT-6.1 Terra",
      "s": true,
      "f": false,
      "title": "GPT-6.1 Terra (Low)"
    },
    {
      "v": [
        0.010461861857632485,
        50.28850117983469
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-sol",
      "id": "gpt-6.1-sol@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Sol medium",
      "l": "GPT-6.1 Sol",
      "s": true,
      "f": false,
      "title": "GPT-6.1 Sol (Medium)"
    },
    {
      "v": [
        0.01433317365063619,
        52.45347449035902
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4-carbon",
      "id": "gemini-4-carbon@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Carbon low",
      "l": "Gemini 4 Carbon",
      "s": true,
      "f": false,
      "title": "Gemini 4 Carbon (Low)"
    },
    {
      "v": [
        0.013460097230868018,
        51.01283814538332
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-sol",
      "id": "gpt-6.2-sol@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Sol medium",
      "l": "GPT-6.2 Sol",
      "s": true,
      "f": false,
      "title": "GPT-6.2 Sol (Medium)"
    },
    {
      "v": [
        0.04793944834308629,
        58.088801360223755
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-astra",
      "id": "gpt-6.2-astra@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Astra medium",
      "l": "GPT-6.2 Astra",
      "s": true,
      "f": false,
      "title": "GPT-6.2 Astra (Medium)"
    },
    {
      "v": [
        0.13630074336880646,
        59.579238481479614
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-astra",
      "id": "gpt-6-astra@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Astra xhigh",
      "l": "GPT-6 Astra",
      "s": true,
      "f": false,
      "title": "GPT-6 Astra (Xhigh)"
    },
    {
      "v": [
        0.00404775988125585,
        22.834948417083087
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-luna",
      "id": "gpt-6-luna@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Luna xhigh",
      "l": "GPT-6 Luna",
      "s": true,
      "f": false,
      "title": "GPT-6 Luna (Xhigh)"
    },
    {
      "v": [
        0.021296438598738504,
        46.63673457603858
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4",
      "id": "gemini-4@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Argon medium",
      "l": "Gemini 4 Argon",
      "s": true,
      "f": false,
      "title": "Gemini 4 Argon (Medium)"
    },
    {
      "v": [
        0.3661998043653872,
        54.01711606988163
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.1",
      "id": "claude-fable-5.1@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.1 xhigh",
      "l": "Fable 5.1",
      "s": true,
      "f": false,
      "title": "Claude Fable 5.1 (Xhigh, Default Fallback)"
    },
    {
      "v": [
        0.0096620544,
        28.284550619152864
      ],
      "c": "#2F4FB0",
      "d": "#6B81F0",
      "dc": "#9aa3b8",
      "dd": "#5b617c",
      "m": "deepseek-v4.1-flash",
      "id": "deepseek-v4.1-flash@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "DeepSeek V4.1 Flash max",
      "l": "DeepSeek V4.1 Flash",
      "s": true,
      "f": false,
      "title": "DeepSeek V4.1 Flash (Max)"
    },
    {
      "v": [
        0.017010928748954806,
        29.889373122956048
      ],
      "c": "#7B4FD8",
      "d": "#AF82F7",
      "dc": "#b0a3c3",
      "dd": "#6e627e",
      "m": "grok-4.7",
      "id": "grok-4.7@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Grok 4.7 low",
      "l": "Grok 4.7",
      "s": true,
      "f": false,
      "title": "Grok 4.7 (Low)"
    },
    {
      "v": [
        0.03900907599999999,
        30.958000827373837
      ],
      "c": "#8A8A80",
      "d": "#7E7D76",
      "dc": "#b4b3aa",
      "dd": "#60605a",
      "m": "glm-5.3",
      "id": "glm-5.3@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GLM 5.3 max",
      "l": "GLM 5.3",
      "s": true,
      "f": false,
      "title": "GLM-5.3 (Max)"
    },
    {
      "v": [
        0.017741618333333334,
        27.6187959219435
      ],
      "c": "#8A8A80",
      "d": "#7E7D76",
      "dc": "#b4b3aa",
      "dd": "#60605a",
      "m": "glm-5.3-flash",
      "id": "glm-5.3-flash@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GLM 5.3 Flash max",
      "l": "GLM 5.3 Flash",
      "s": true,
      "f": false,
      "title": "GLM-5.3-Flash (Max)"
    },
    {
      "v": [
        0.0487074973217589,
        68.43087844883846
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.2",
      "id": "claude-fable-5.2@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.2 high",
      "l": "Fable 5.2",
      "s": false,
      "f": true,
      "title": "Claude Fable 5.2 (High, Default Fallback)"
    },
    {
      "v": [
        0.07718465518269658,
        68.26007478285379
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.2",
      "id": "claude-fable-5.2@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.2 xhigh",
      "l": "Fable 5.2",
      "s": false,
      "f": false,
      "title": "Claude Fable 5.2 (Xhigh, Default Fallback)"
    },
    {
      "v": [
        0.0300792230879859,
        63.603688295057026
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.2",
      "id": "claude-fable-5.2@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.2 medium",
      "l": "Fable 5.2",
      "s": false,
      "f": true,
      "title": "Claude Fable 5.2 (Medium, Default Fallback)"
    },
    {
      "v": [
        0.04243860904707225,
        63.38935613950836
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4-neon",
      "id": "gemini-4-neon@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Neon xhigh",
      "l": "Gemini 4 Neon",
      "s": false,
      "f": false,
      "title": "Gemini 4 Neon (Xhigh)"
    },
    {
      "v": [
        0.07933947482913524,
        61.48336306825921
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4-carbon",
      "id": "gemini-4-carbon@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Carbon high",
      "l": "Gemini 4 Carbon",
      "s": false,
      "f": false,
      "title": "Gemini 4 Carbon (High)"
    },
    {
      "v": [
        0.029955442030199998,
        61.37920919572697
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.2",
      "id": "claude-fable-5.2@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.2 low",
      "l": "Fable 5.2",
      "s": false,
      "f": false,
      "title": "Claude Fable 5.2 (Low, Default Fallback)"
    },
    {
      "v": [
        0.14314318616893046,
        61.11024873142915
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-astra",
      "id": "gpt-6.2-astra@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Astra xhigh",
      "l": "GPT-6.2 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Astra (Xhigh)"
    },
    {
      "v": [
        0.2746246682186873,
        60.97642869875672
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-astra",
      "id": "gpt-6.2-astra@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Astra max",
      "l": "GPT-6.2 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Astra (Max)"
    },
    {
      "v": [
        0.19014565471937617,
        60.31690741104369
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-astra",
      "id": "gpt-6-astra@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Astra max",
      "l": "GPT-6 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6 Astra (Max)"
    },
    {
      "v": [
        0.018952441453227588,
        60.20187604558611
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-opus-5.5",
      "id": "claude-opus-5.5@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "Opus 5.5 xhigh",
      "l": "Opus 5.5",
      "s": false,
      "f": false,
      "title": "Claude Opus 5.5 (Xhigh, Default Fallback)"
    },
    {
      "v": [
        0.04039241333188517,
        60.16016997782976
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4-carbon",
      "id": "gemini-4-carbon@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Carbon medium",
      "l": "Gemini 4 Carbon",
      "s": false,
      "f": false,
      "title": "Gemini 4 Carbon (Medium)"
    },
    {
      "v": [
        0.09603871792875988,
        59.28325270813831
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-astra",
      "id": "gpt-6.2-astra@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Astra high",
      "l": "GPT-6.2 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Astra (High)"
    },
    {
      "v": [
        0.09320575524821599,
        58.60592777169311
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-astra",
      "id": "gpt-6-astra@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Astra high",
      "l": "GPT-6 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6 Astra (High)"
    },
    {
      "v": [
        0.016122760268102953,
        57.60504331891878
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4-neon",
      "id": "gemini-4-neon@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Neon medium",
      "l": "Gemini 4 Neon",
      "s": false,
      "f": false,
      "title": "Gemini 4 Neon (Medium)"
    },
    {
      "v": [
        0.012190971314930405,
        56.549037321799155
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-opus-5.5",
      "id": "claude-opus-5.5@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Opus 5.5 high",
      "l": "Opus 5.5",
      "s": false,
      "f": true,
      "title": "Claude Opus 5.5 (High, Default Fallback)"
    },
    {
      "v": [
        0.03272220811635431,
        56.37833016682124
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-sol",
      "id": "gpt-6.1-sol@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Sol max",
      "l": "GPT-6.1 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Sol (Max)"
    },
    {
      "v": [
        0.0642786650917228,
        56.1145683136049
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-astra",
      "id": "gpt-6-astra@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Astra medium",
      "l": "GPT-6 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6 Astra (Medium)"
    },
    {
      "v": [
        0.03270109993715431,
        55.30863432407009
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-sol",
      "id": "gpt-6.2-sol@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Sol max",
      "l": "GPT-6.2 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Sol (Max)"
    },
    {
      "v": [
        0.023751961902906595,
        55.14447803343271
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-sol",
      "id": "gpt-6.1-sol@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Sol xhigh",
      "l": "GPT-6.1 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Sol (Xhigh)"
    },
    {
      "v": [
        0.4608970072759731,
        53.77485504678019
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.1",
      "id": "claude-fable-5.1@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.1 max",
      "l": "Fable 5.1",
      "s": false,
      "f": false,
      "title": "Claude Fable 5.1 (Max, Default Fallback)"
    },
    {
      "v": [
        0.004085900593603563,
        53.69395539655555
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4-neon",
      "id": "gemini-4-neon@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Neon low",
      "l": "Gemini 4 Neon",
      "s": false,
      "f": true,
      "title": "Gemini 4 Neon (Low)"
    },
    {
      "v": [
        0.0226536936958,
        53.62212243229351
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-sol",
      "id": "gpt-6.2-sol@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Sol xhigh",
      "l": "GPT-6.2 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Sol (Xhigh)"
    },
    {
      "v": [
        0.009815263931633029,
        52.85341178676401
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-opus-5.5",
      "id": "claude-opus-5.5@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Opus 5.5 medium",
      "l": "Opus 5.5",
      "s": false,
      "f": false,
      "title": "Claude Opus 5.5 (Medium, Default Fallback)"
    },
    {
      "v": [
        0.016603397762044666,
        52.784750039218494
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-sol",
      "id": "gpt-6.1-sol@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Sol high",
      "l": "GPT-6.1 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Sol (High)"
    },
    {
      "v": [
        0.017727210750102532,
        52.50663639338343
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-sol",
      "id": "gpt-6.2-sol@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Sol high",
      "l": "GPT-6.2 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Sol (High)"
    },
    {
      "v": [
        0.20558053397546805,
        51.37776718888459
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.1",
      "id": "claude-fable-5.1@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.1 high",
      "l": "Fable 5.1",
      "s": false,
      "f": false,
      "title": "Claude Fable 5.1 (High, Default Fallback)"
    },
    {
      "v": [
        0.04012945144315306,
        50.88272275695229
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-astra",
      "id": "gpt-6-astra@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Astra low",
      "l": "GPT-6 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6 Astra (Low)"
    },
    {
      "v": [
        0.03679689027986243,
        50.688911591009735
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-astra",
      "id": "gpt-6.2-astra@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Astra low",
      "l": "GPT-6.2 Astra",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Astra (Low)"
    },
    {
      "v": [
        0.009720587070513459,
        50.20450270957363
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-sonnet-5.5",
      "id": "claude-sonnet-5.5@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "Sonnet 5.5 xhigh",
      "l": "Sonnet 5.5",
      "s": false,
      "f": false,
      "title": "Claude Sonnet 5.5 (Xhigh, Default Fallback)"
    },
    {
      "v": [
        0.1663192875002155,
        48.96728588345472
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.1",
      "id": "claude-fable-5.1@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.1 medium",
      "l": "Fable 5.1",
      "s": false,
      "f": false,
      "title": "Claude Fable 5.1 (Medium, Default Fallback)"
    },
    {
      "v": [
        0.04458871687936326,
        48.25364507419791
      ],
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "m": "gemini-4",
      "id": "gemini-4@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Gemini 4 Argon high",
      "l": "Gemini 4 Argon",
      "s": false,
      "f": false,
      "title": "Gemini 4 Argon (High)"
    },
    {
      "v": [
        0.012067030900108532,
        48.25128475239066
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-terra",
      "id": "gpt-6.1-terra@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Terra max",
      "l": "GPT-6.1 Terra",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Terra (Max)"
    },
    {
      "v": [
        0.0064160317463694385,
        43.89579838373299
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-terra",
      "id": "gpt-6.1-terra@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Terra xhigh",
      "l": "GPT-6.1 Terra",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Terra (Xhigh)"
    },
    {
      "v": [
        0.006878919205745176,
        43.77540311948633
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-sol",
      "id": "gpt-6.1-sol@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Sol low",
      "l": "GPT-6.1 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Sol (Low)"
    },
    {
      "v": [
        0.1483450233678384,
        43.72537060896833
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-fable-5.1",
      "id": "claude-fable-5.1@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Fable 5.1 low",
      "l": "Fable 5.1",
      "s": false,
      "f": false,
      "title": "Claude Fable 5.1 (Low, Default Fallback)"
    },
    {
      "v": [
        0.006005711016042959,
        43.64222189253711
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-opus-5.5",
      "id": "claude-opus-5.5@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Opus 5.5 low",
      "l": "Opus 5.5",
      "s": false,
      "f": false,
      "title": "Claude Opus 5.5 (Low, Default Fallback)"
    },
    {
      "v": [
        0.006288735123298328,
        42.60976680051664
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-sonnet-5.5",
      "id": "claude-sonnet-5.5@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Sonnet 5.5 high",
      "l": "Sonnet 5.5",
      "s": false,
      "f": false,
      "title": "Claude Sonnet 5.5 (High, Default Fallback)"
    },
    {
      "v": [
        0.006105812052273095,
        41.85054336283397
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.2-sol",
      "id": "gpt-6.2-sol@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.2 Sol low",
      "l": "GPT-6.2 Sol",
      "s": false,
      "f": false,
      "title": "GPT-6.2 Sol (Low)"
    },
    {
      "v": [
        0.005109095302719828,
        40.628443020609204
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-terra",
      "id": "gpt-6.1-terra@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Terra high",
      "l": "GPT-6.1 Terra",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Terra (High)"
    },
    {
      "v": [
        0.004507230671613762,
        37.958214273128135
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6.1-terra",
      "id": "gpt-6.1-terra@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6.1 Terra medium",
      "l": "GPT-6.1 Terra",
      "s": false,
      "f": false,
      "title": "GPT-6.1 Terra (Medium)"
    },
    {
      "v": [
        0.08928577187253993,
        33.74328807436286
      ],
      "c": "#7B4FD8",
      "d": "#AF82F7",
      "dc": "#b0a3c3",
      "dd": "#6e627e",
      "m": "grok-4.7",
      "id": "grok-4.7@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "Grok 4.7 xhigh",
      "l": "Grok 4.7",
      "s": false,
      "f": false,
      "title": "Grok 4.7 (Xhigh)"
    },
    {
      "v": [
        0.003789853226926778,
        33.420376051045345
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-sonnet-5.5",
      "id": "claude-sonnet-5.5@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Sonnet 5.5 medium",
      "l": "Sonnet 5.5",
      "s": false,
      "f": true,
      "title": "Claude Sonnet 5.5 (Medium, Default Fallback)"
    },
    {
      "v": [
        0.000705171920087256,
        30.539189458140125
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-haiku-5.5",
      "id": "claude-haiku-5.5@xhigh",
      "e": "xhigh",
      "h": false,
      "a": false,
      "g": false,
      "n": "Haiku 5.5 xhigh",
      "l": "Haiku 5.5",
      "s": false,
      "f": true,
      "title": "Claude Haiku 5.5 (Xhigh)"
    },
    {
      "v": [
        0.002875998654557183,
        30.41626254040039
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-sonnet-5.5",
      "id": "claude-sonnet-5.5@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Sonnet 5.5 low",
      "l": "Sonnet 5.5",
      "s": false,
      "f": false,
      "title": "Claude Sonnet 5.5 (Low, Default Fallback)"
    },
    {
      "v": [
        0.000590445508149168,
        27.26655652993779
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-haiku-5.5",
      "id": "claude-haiku-5.5@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "Haiku 5.5 high",
      "l": "Haiku 5.5",
      "s": false,
      "f": true,
      "title": "Claude Haiku 5.5 (High)"
    },
    {
      "v": [
        0.005449198046446734,
        25.577162888307765
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-luna",
      "id": "gpt-6-luna@max",
      "e": "max",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Luna max",
      "l": "GPT-6 Luna",
      "s": false,
      "f": false,
      "title": "GPT-6 Luna (Max)"
    },
    {
      "v": [
        0.00038059131701988257,
        23.33866820925136
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-haiku-5.5",
      "id": "claude-haiku-5.5@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "Haiku 5.5 medium",
      "l": "Haiku 5.5",
      "s": false,
      "f": true,
      "title": "Claude Haiku 5.5 (Medium)"
    },
    {
      "v": [
        0.0022988762275039454,
        21.639986355212216
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-luna",
      "id": "gpt-6-luna@high",
      "e": "high",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Luna high",
      "l": "GPT-6 Luna",
      "s": false,
      "f": false,
      "title": "GPT-6 Luna (High)"
    },
    {
      "v": [
        0.00021554851518574222,
        19.764088515040626
      ],
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "m": "claude-haiku-5.5",
      "id": "claude-haiku-5.5@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "Haiku 5.5 low",
      "l": "Haiku 5.5",
      "s": false,
      "f": true,
      "title": "Claude Haiku 5.5 (Low)"
    },
    {
      "v": [
        0.0015746588179446257,
        19.400070551384637
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-luna",
      "id": "gpt-6-luna@medium",
      "e": "medium",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Luna medium",
      "l": "GPT-6 Luna",
      "s": false,
      "f": false,
      "title": "GPT-6 Luna (Medium)"
    },
    {
      "v": [
        0.0006178930146967347,
        13.77193184868892
      ],
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "m": "gpt-6-luna",
      "id": "gpt-6-luna@low",
      "e": "low",
      "h": false,
      "a": false,
      "g": false,
      "n": "GPT-6 Luna low",
      "l": "GPT-6 Luna",
      "s": false,
      "f": false,
      "title": "GPT-6 Luna (Low)"
    }
  ],
  "frontier": [
    [
      0.00021554851518574222,
      19.764088515040626
    ],
    [
      0.00038059131701988257,
      23.33866820925136
    ],
    [
      0.000590445508149168,
      27.26655652993779
    ],
    [
      0.000705171920087256,
      30.539189458140125
    ],
    [
      0.0019469150123684635,
      32.40002165354801
    ],
    [
      0.003789853226926778,
      33.420376051045345
    ],
    [
      0.004085900593603563,
      53.69395539655555
    ],
    [
      0.012190971314930405,
      56.549037321799155
    ],
    [
      0.015267251146563004,
      58.234430011647966
    ],
    [
      0.016056976649336197,
      61.74992278276395
    ],
    [
      0.0300792230879859,
      63.603688295057026
    ],
    [
      0.03324588232161985,
      64.91777212636212
    ],
    [
      0.0487074973217589,
      68.43087844883846
    ],
    [
      0.14896024488574383,
      70.44793488685832
    ]
  ],
  "links": [
    {
      "m": "claude-fable-5.2",
      "h": false,
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "p": [
        [
          0.029955442030199998,
          61.37920919572697
        ],
        [
          0.0300792230879859,
          63.603688295057026
        ],
        [
          0.0487074973217589,
          68.43087844883846
        ],
        [
          0.07718465518269658,
          68.26007478285379
        ],
        [
          0.14896024488574383,
          70.44793488685832
        ]
      ]
    },
    {
      "m": "claude-opus-5.5",
      "h": false,
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "p": [
        [
          0.006005711016042959,
          43.64222189253711
        ],
        [
          0.009815263931633029,
          52.85341178676401
        ],
        [
          0.012190971314930405,
          56.549037321799155
        ],
        [
          0.018952441453227588,
          60.20187604558611
        ],
        [
          0.03324588232161985,
          64.91777212636212
        ]
      ]
    },
    {
      "m": "gemini-4-neon",
      "h": false,
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "p": [
        [
          0.004085900593603563,
          53.69395539655555
        ],
        [
          0.016056976649336197,
          61.74992278276395
        ],
        [
          0.016122760268102953,
          57.60504331891878
        ],
        [
          0.04243860904707225,
          63.38935613950836
        ]
      ]
    },
    {
      "m": "gemini-4-carbon",
      "h": false,
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "p": [
        [
          0.01433317365063619,
          52.45347449035902
        ],
        [
          0.04039241333188517,
          60.16016997782976
        ],
        [
          0.07933947482913524,
          61.48336306825921
        ]
      ]
    },
    {
      "m": "gpt-6.2-astra",
      "h": false,
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "p": [
        [
          0.03679689027986243,
          50.688911591009735
        ],
        [
          0.04793944834308629,
          58.088801360223755
        ],
        [
          0.09603871792875988,
          59.28325270813831
        ],
        [
          0.14314318616893046,
          61.11024873142915
        ],
        [
          0.2746246682186873,
          60.97642869875672
        ]
      ]
    },
    {
      "m": "gpt-6-astra",
      "h": false,
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "p": [
        [
          0.04012945144315306,
          50.88272275695229
        ],
        [
          0.0642786650917228,
          56.1145683136049
        ],
        [
          0.09320575524821599,
          58.60592777169311
        ],
        [
          0.13630074336880646,
          59.579238481479614
        ],
        [
          0.19014565471937617,
          60.31690741104369
        ]
      ]
    },
    {
      "m": "claude-sonnet-5.5",
      "h": false,
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "p": [
        [
          0.002875998654557183,
          30.41626254040039
        ],
        [
          0.003789853226926778,
          33.420376051045345
        ],
        [
          0.006288735123298328,
          42.60976680051664
        ],
        [
          0.009720587070513459,
          50.20450270957363
        ],
        [
          0.015267251146563004,
          58.234430011647966
        ]
      ]
    },
    {
      "m": "gpt-6.1-sol",
      "h": false,
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "p": [
        [
          0.006878919205745176,
          43.77540311948633
        ],
        [
          0.010461861857632485,
          50.28850117983469
        ],
        [
          0.016603397762044666,
          52.784750039218494
        ],
        [
          0.023751961902906595,
          55.14447803343271
        ],
        [
          0.03272220811635431,
          56.37833016682124
        ]
      ]
    },
    {
      "m": "gpt-6.2-sol",
      "h": false,
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "p": [
        [
          0.006105812052273095,
          41.85054336283397
        ],
        [
          0.013460097230868018,
          51.01283814538332
        ],
        [
          0.017727210750102532,
          52.50663639338343
        ],
        [
          0.0226536936958,
          53.62212243229351
        ],
        [
          0.03270109993715431,
          55.30863432407009
        ]
      ]
    },
    {
      "m": "claude-fable-5.1",
      "h": false,
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "p": [
        [
          0.1483450233678384,
          43.72537060896833
        ],
        [
          0.1663192875002155,
          48.96728588345472
        ],
        [
          0.20558053397546805,
          51.37776718888459
        ],
        [
          0.3661998043653872,
          54.01711606988163
        ],
        [
          0.4608970072759731,
          53.77485504678019
        ]
      ]
    },
    {
      "m": "gemini-4",
      "h": false,
      "c": "#3B78D8",
      "d": "#67A7F8",
      "dc": "#9eaec3",
      "dd": "#5a6c7e",
      "p": [
        [
          0.021296438598738504,
          46.63673457603858
        ],
        [
          0.04458871687936326,
          48.25364507419791
        ]
      ]
    },
    {
      "m": "gpt-6.1-terra",
      "h": false,
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "p": [
        [
          0.004037991566143855,
          32.69969173254507
        ],
        [
          0.004507230671613762,
          37.958214273128135
        ],
        [
          0.005109095302719828,
          40.628443020609204
        ],
        [
          0.0064160317463694385,
          43.89579838373299
        ],
        [
          0.012067030900108532,
          48.25128475239066
        ]
      ]
    },
    {
      "m": "grok-4.7",
      "h": false,
      "c": "#7B4FD8",
      "d": "#AF82F7",
      "dc": "#b0a3c3",
      "dd": "#6e627e",
      "p": [
        [
          0.017010928748954806,
          29.889373122956048
        ],
        [
          0.08928577187253993,
          33.74328807436286
        ]
      ]
    },
    {
      "m": "claude-haiku-5.5",
      "h": false,
      "c": "#C96A4A",
      "d": "#EA8A73",
      "dc": "#c5aa9b",
      "dd": "#7f6459",
      "p": [
        [
          0.00021554851518574222,
          19.764088515040626
        ],
        [
          0.00038059131701988257,
          23.33866820925136
        ],
        [
          0.000590445508149168,
          27.26655652993779
        ],
        [
          0.000705171920087256,
          30.539189458140125
        ],
        [
          0.0019469150123684635,
          32.40002165354801
        ]
      ]
    },
    {
      "m": "gpt-6-luna",
      "h": false,
      "c": "#2B2B2B",
      "d": "#BDBCB4",
      "dc": "#999893",
      "dd": "#72726b",
      "p": [
        [
          0.0006178930146967347,
          13.77193184868892
        ],
        [
          0.0015746588179446257,
          19.400070551384637
        ],
        [
          0.0022988762275039454,
          21.639986355212216
        ],
        [
          0.00404775988125585,
          22.834948417083087
        ],
        [
          0.005449198046446734,
          25.577162888307765
        ]
      ]
    }
  ]
});
