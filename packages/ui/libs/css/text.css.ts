import { globalFontFace } from "@vanilla-extract/css";

export const nanumGothicRegular = "nanumGothicRegular";
export const nanumGothicMedium = "nanumGothicMedium";
export const nanumGothicBold = "nanumGothicBold";
export const nanumGothicExtraBold = "nanumGothicExtraBold";

globalFontFace(nanumGothicRegular, {
  src: 'url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicLight.otf) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicLight.ttf) format("truetype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicLight.woff) format("woff")',
});

globalFontFace(nanumGothicMedium, {
  src: 'url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothic.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothic.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothic.ttf) format("truetype")',
});

globalFontFace(nanumGothicBold, {
  src: 'url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicBold.otf) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicBold.ttf) format("truetype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicBold.woff) format("woff")',
});

globalFontFace(nanumGothicExtraBold, {
  src: 'url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicExtraBold.otf) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicExtraBold.ttf) format("truetype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumGothic/NanumGothicExtraBold.woff) format("woff")',
});
