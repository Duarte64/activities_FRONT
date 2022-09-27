import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 12px;
    align-items: center;
    max-width: 1600px;
    width: 100%;
    margin: 24px auto;

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border: 2px solid #1e1e1e;
        border-radius: 24px;
        overflow: hidden;

        th {
            padding: 24px 16px;
            margin: auto;
            font-size: 18px;
            font-weight: 500;
        }

        thead {
            background-color: #1e1e1e;
            color: #FFFFFF;
            font-weight: 500;
            font-size: 16px;
            text-align: left;
            border-bottom: 1px solid white;

            tr {
                height: 64px;
            }
        }

        tbody {
            tr {
                height: 48px;
                border-bottom: 2px solid #1e1e1e;
                padding: 8px 16px;
                color: #DFDFDF;
                font-weight: 300;
                font-size: 18px;

                &:last-child {
                    border-bottom: none;
                }

                &:nth-child(odd) {
                    background-color: #1e1e1e; 
                }

                td {
                    padding: 16px;

                    div {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.5em;

                        svg {
                            cursor: pointer;
                        }
                        
                        img {
                            border-radius: 4px;
                            margin-right: 0.5em;
                            width: 32px;
                            height: 32px;
                        }
                    }

                    
                }
            }
        }
    }
`;