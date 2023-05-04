import React from 'react';

type Weight = 'regular' | 'medium' | 'bold';
type VariantName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'p-sm';

const getFontWeight = (weight?: Weight) =>
    weight === 'bold' ? '700' : weight === 'medium' ? '500' : '400';

interface VariantObject {
    component: React.ElementType;
    style: VariantObjectStyle;
}

interface VariantObjectStyle {
    fontSize: number;
    lineHeight: number;
}

const VARIANT_OBJECTS_LIST: Record<VariantName, VariantObject> = {
    h1: {
        component: 'h1',
        style: {
            fontSize: 35,
            lineHeight: 38,
        },
    },
    h2: {
        component: 'h2',
        style: {
            fontSize: 30,
            lineHeight: 33,
        },
    },
    h3: {
        component: 'h3',
        style: {
            fontSize: 24,
            lineHeight: 26,
        },
    },
    h4: {
        component: 'h4',
        style: {
            fontSize: 18,
            lineHeight: 20,
        },
    },
    h5: {
        component: 'h5',
        style: {
            fontSize: 16,
            lineHeight: 18,
        },
    },
    h6: {
        component: 'h6',
        style: {
            fontSize: 14,
            lineHeight: 16,
        },
    },
    p: {
        component: 'p',
        style: {
            fontSize: 16,
            lineHeight: 20,
        },
    },
    'p-sm': {
        component: 'p',
        style: {
            fontSize: 12,
            lineHeight: 14,
        },
    },
};

type TypographyProps = {
    variantName: VariantName;
    weight?: Weight;
    textColor?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'>;

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
    ({ variantName, weight, textColor, children, ...containerAttrs }, ref) => {
        const variantObj = VARIANT_OBJECTS_LIST[variantName];
        const TagName = variantObj.component;
        const variantStyle = variantObj.style;

        const styles = {
            color: textColor || '#000',
            fontSize: `${variantStyle.fontSize}px`,
            lineHeight: `${variantStyle.lineHeight}px`,
            fontWeight: getFontWeight(weight),
        };

        return (
            <TagName ref={ref} style={styles} {...containerAttrs}>
                {children}
            </TagName>
        );
    }
);

export default Typography;
