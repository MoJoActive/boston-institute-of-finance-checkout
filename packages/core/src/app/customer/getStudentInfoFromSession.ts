export const STUDENT_PHONE_FIELD_ID = 'field_29';
export const STUDENT_COMPANY_FIELD_ID = 'field_30';

export interface StudentCustomField {
    fieldId: string;
    fieldValue: string;
}

export function getStudentInfoFromSession(): StudentCustomField[] {
    try { return JSON.parse(sessionStorage.getItem('studentInfo') || '[]'); }
    catch { return []; }
}

export function getStudentPhoneFromSession(): string | undefined {
    return getStudentInfoFromSession().find((field) => field.fieldId === STUDENT_PHONE_FIELD_ID)
        ?.fieldValue;
}

export function getStudentCompanyFromSession(): string | undefined {
    return getStudentInfoFromSession().find((field) => field.fieldId === STUDENT_COMPANY_FIELD_ID)
        ?.fieldValue;
}

export function applyStudentPhoneToAddress<T extends object>(address: T): T {
    const phone = getStudentPhoneFromSession();
    const company = getStudentCompanyFromSession();

    if (!phone && !company) return address;

    return {
        ...address,
        ...(phone ? { phone } : {}),
        ...(company ? { company } : {}),
    };
}
